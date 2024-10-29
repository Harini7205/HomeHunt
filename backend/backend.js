const axios = require('axios');
const mongoose = require('mongoose');

const UNSPLASH_ACCESS_KEY = 'OKrtJ5GNG43JppRxa9kWXgxZfarqw6vTZD13NWsb37Q';
const MONGODB_URI = 'mongodb+srv://22n219:SlVXSTQktVuWOFsN@homehunt.ierjb.mongodb.net/homehunt?retryWrites=true&w=majority&appName=HomeHunt' ;

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

// Function to fetch images for a specific type, getting enough pages to match the count
async function fetchImagesByType(query, requiredCount) {
  let images = [];
  let page = 1;
  const perPage = 30; // Unsplash allows up to 30 images per page
  
  try {
    while (images.length < requiredCount) {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: query,
          page: page,
          per_page: perPage,
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      });

      const newImages = response.data.results.map((img) => img.urls.regular);
      images = images.concat(newImages);

      // Break if there are no more images to fetch
      if (newImages.length < perPage) break;

      page++; // Move to the next page
    }

    // Ensure we only return the number of images required
    return images.slice(0, requiredCount);
  } catch (error) {
    console.error(`Error fetching images for ${query}:`, error);
    return [];
  }
}

// Function to update MongoDB properties by type
async function updatePropertiesByType(type, images) {
  try {
    const properties = await Property.find({ type: type }).limit(images.length);

    if (properties.length === 0) {
      console.log(`No properties found for type: ${type}`);
      return;
    }

    for (let i = 0; i < properties.length; i++) {
      properties[i].image = images[i];
      await properties[i].save();
      console.log(`Updated ${type} property ${i + 1} with new image`);
    }

    console.log(`All ${type} properties updated successfully`);
  } catch (error) {
    console.error(`Error updating properties for ${type}:`, error);
  }
}

// Main function to manage fetching and updating
async function main() {
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');

  const types = ['Apartment', 'Condo', 'Villa', 'House'];

  for (const type of types) {
    // Determine the number of documents that need images
    const propertyCount = await Property.countDocuments({ type: type });

    if (propertyCount > 0) {
      // Fetch the required number of images for this type
      const images = await fetchImagesByType(type, propertyCount);
      
      if (images.length > 0) {
        // Update the properties with fetched images
        await updatePropertiesByType(type, images);
      } else {
        console.log(`No images found for type: ${type}`);
      }
    } else {
      console.log(`No properties found for type: ${type}`);
    }
  }

  mongoose.connection.close();
  console.log('Database connection closed');
}

main();
