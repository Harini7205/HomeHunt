import React from 'react';
import './PropertyForm.css';
import UserProfile from './UserProfile'; // Assuming UserProfile is a separate component

const PropertyForm = () => {
  return (
    <div className="property-form-container">
      {/* Sidebar */}
      <div className="sidebar">
        <UserProfile />
        <div className="menu-items">
          <div className="menu-item">Dashboard</div>
          <div className="menu-item">Properties</div>
          <div className="menu-item">Updates</div>
          <div className="menu-item">Latest</div>
          <div className="menu-item">Statistics</div>
          <div className="menu-item">Notifications</div>
        </div>
        <div className="menu-items">
          <div className="menu-item">Help & Support</div>
          <div className="menu-item logout-btn">Log Out</div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="main-form">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>About the Property</h2>

        <div className="form-box">
          <form>
            <h2>Property Details</h2>
            <div className="form-group">
              <label>Property Name</label>
              <input type="text" placeholder="Text" />
            </div>
            <div className="form-group">
              <label>Address of the Property</label>
              <input type="text" placeholder="Text" />
            </div>
            <div className="form-group">
              <label>Price of the Property</label>
              <input type="text" placeholder="Text" />
            </div>
            {/* New Fields Added Below */}
            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Enter property description" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label>Number of Bedrooms</label>
              <input type="number" placeholder="0" />
            </div>
            <div className="form-group">
              <label>Number of Bathrooms</label>
              <input type="number" placeholder="0" />
            </div>
            <div className="form-group">
              <label>Size in Sq Ft</label>
              <input type="number" placeholder="0" />
            </div>
            <div className="form-group">
              <label>Type of House</label>
              <select>
                <option value="">Select</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>
            <div className="form-group">
              <label>Parking</label>
              <input type="text" placeholder="e.g. Garage, Street Parking" />
            </div>

            <h2>Property Owner Details</h2>
            <div className="form-group">
              <label>Property Owner's Name</label>
              <input type="text" placeholder="Text" />
            </div>
            <div className="form-group">
              <label>Address of the Property Owner</label>
              <input type="text" placeholder="Text" />
            </div>

            <div className="upload-buttons">
              <button type="button" className="upload-btn">Upload Documents</button>
              <button type="button" className="upload-btn">Upload Images</button>
            </div>

            <button type="submit" className="authenticate-btn">Authenticate Property</button>
          </form>
          
          {/* Blue Pip Line */}
          <div className="blue-pip-container">
            <div className="blue-pip-line">
              <div className="blue-pip-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
