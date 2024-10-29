const express = require('express');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const mongoose = require('mongoose'); // Import mongoose for database connection
require('dotenv').config(); // Load environment variables from .env file

// Import the User model
const User = require('./models/user'); // Adjust the path if necessary

const app = express();
const PORT = process.env.PORT || 5000;

const secret = process.env.JWT_SECRET;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the folder to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Append timestamp to the original filename
  },
});

const upload = multer({ storage });

// Function to generate reset token
function generateResetToken(userId) {
  const payload = { id: userId };
  const options = {
    expiresIn: '15m',
  };
  const token = jwt.sign(payload, secret, options);
  return token;
}

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'homehunt640@gmail.com', // Your email
    pass: 'hlxo xlab fvjq jnzp', // Your email password or app password
  },
});

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Update with your frontend URL
app.use(express.json()); // For parsing application/json
app.use(express.static('uploads')); // Serve static files from the uploads directory

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Property schema and model
const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  size: Number,
  rooms: Number,
  type: String,
  bathroom: Number,
  parking: String,
  ownerName: String,
  ownerAddress: String,
  description: String,
  document: String, // Single document file path
  image: String, // Single image file path
});

const Property = mongoose.model('Property', propertySchema);

// API Endpoint to get properties
app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.find({});
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties' });
  }
});

// API Endpoint to create a property
app.post('/api/properties', upload.fields([{ name: 'document' }, { name: 'image' }]), async (req, res) => {
  const { title, location, price, size, rooms, type, bathroom, parking, ownerName, ownerAddress, description } = req.body;

  // Get the paths of the uploaded document and image
  const document = req.files['document'] && req.files['document'][0] ? req.files['document'][0].path : null;
  const image = req.files['image'] && req.files['image'][0] ? req.files['image'][0].path : null;

  const property = new Property({
    title,
    location,
    price,
    size,
    rooms,
    type,
    bathroom,
    parking,
    ownerName,
    ownerAddress,
    description,
    document, // Store single document path
    image, // Store single image path
  });

  try {
    await property.save();
    res.status(201).json({ message: 'Property created successfully', property });
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error });
  }
});

// User registration route
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash password and create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    // Save user to the database
    await user.save();
    res.status(201).json({ message: 'User registered', role });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// User login route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ name: user.name, email: user.email, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Forgot password route
app.post('/api/auth/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = generateResetToken(user._id); // Use user ID for token

    // Save reset token and expiration time to user document
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 15 * 60 * 1000; // 15 minutes from now
    await user.save();

    const mailOptions = {
      from: 'homehunt640@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `You requested a password reset. Click the link to reset your password: http://localhost:3000/resetpassword?token=${resetToken}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Reset password route
app.post('/api/auth/reset-password', async (req, res) => {
  const { token, password } = req.body;
  try {
    // Find user by reset token and check expiration
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired token.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();
    res.json({ success: true, message: 'Password has been reset successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  // Since JWT is stateless, we will just send a response to the client.
  // The client should remove the token from storage (local storage or cookies).
  res.json({ message: 'Logout successful.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
