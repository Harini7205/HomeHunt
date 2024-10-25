const express = require('express');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const cors = require('cors');
const jwt=require('jsonwebtoken');
const mongoose = require('mongoose'); // Import mongoose for database connection
require('dotenv').config(); // Load environment variables from .env file

// Import the User model
const User = require('./models/user'); // Adjust the path if necessary

const app = express();
const PORT = process.env.PORT || 5000;

const secret=process.env.JWT_SECRET;

function generateResetToken(userId) {
  const payload = { id: userId };
  const options = {
    expiresIn: '15m', 
  };
  const token = jwt.sign(payload, secret , options);
  return token;
}

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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { // Replace with your MongoDB URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
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

app.post('/api/auth/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = generateResetToken(email); // Use user ID for token

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

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Update user password and clear reset token and expiration
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
