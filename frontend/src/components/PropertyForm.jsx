import React, { useState } from 'react';
import '../styles/PropertyForm.css';
import Sidebar from './Sidebar';

const PropertyForm = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    type: '',
    parking: '',
    ownerName: '',
    ownerAddress: '',
  });

  // State for file uploads
  const [document, setDocument] = useState(null);
  const [image, setImage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'document') {
      setDocument(files[0]); // Only keep the first file
    } else if (name === 'image') {
      setImage(files[0]); // Only keep the first file
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append form fields to FormData
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Append single file to FormData
    if (document) {
      formDataToSend.append('document', document);
    }
    if (image) {
      formDataToSend.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/properties', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Property authenticated successfully!');
        console.log(result);
      } else {
        alert('Error authenticating property: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="property-form-container">
      <Sidebar />

      <div className="main-form">
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: "32px" }}>ABOUT THE PROPERTY</h2>

        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h2>Property Details</h2>
            <div className="form-group">
              <label>Property Name</label>
              <input
                type="text"
                name="title"
                value={formData.propertyName}
                onChange={handleChange}
                placeholder="Enter property name"
                required
              />
            </div>
            <div className="form-group">
              <label>Address of the Property</label>
              <input
                type="text"
                name="location"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
              />
            </div>
            <div className="form-group">
              <label>Price of the Property</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter property description"
                rows="4"
                cols="125"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Number of Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                placeholder="0"
                required
              />
            </div>
            <div className="form-group">
              <label>Number of Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                placeholder="0"
                required
              />
            </div>
            <div className="form-group">
              <label>Size in Sq Ft</label>
              <input
                type="number"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="0"
                required
              />
            </div>
            <div className="form-group">
              <label>Type of House</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>
            <div className="form-group">
              <label>Parking</label>
              <input
                type="text"
                name="parking"
                value={formData.parking}
                onChange={handleChange}
                placeholder="e.g. Garage, Street Parking"
              />
            </div>

            <h2>Property Owner Details</h2>
            <div className="form-group">
              <label>Property Owner's Name</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter owner's name"
                required
              />
            </div>
            <div className="form-group">
              <label>Address of the Property Owner</label>
              <input
                type="text"
                name="ownerAddress"
                value={formData.ownerAddress}
                onChange={handleChange}
                placeholder="Enter owner's address"
                required
              />
            </div>

            <div className="upload-buttons">
              <label>Upload Document</label>
              <input type="file" name="document" onChange={handleFileChange} />
            </div>
            <div className="upload-buttons">
              <label>Upload Image</label>
              <input type="file" name="image" onChange={handleFileChange} />
            </div>

            <button type="submit" className="authenticate-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
