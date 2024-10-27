import React from 'react';
import './UserProfile.css'; // Import the CSS file for styling

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h2 className="heading">User Profile</h2>

      <div className="profile-header">
        <div className="profile-photo">
          <img src="user-photo.jpg" alt="User" />
        </div>
        <div className="profile-info">
          <h3>Alaa Mohamed</h3>
          <p>Product Design</p>
          <p>Eastern European Time (EET), Cairo UTC +3</p>
          <div className="buttons">
            <button className="upload-photo">Upload New Photo</button>
            <button className="delete-photo">Delete</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="form-section">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-group">
          <label>User Name</label>
          <input type="text" className="wide user-name" />
        </div>

        <hr />

        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" />
          </div>
        </div>

        <hr />

        <div className="form-group">
          <label>Location</label>
          <input type="text" className="wide location" />
        </div>

        <hr />

        <div className="form-row">
          <div className="form-group">
            <label>Current Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" />
          </div>
        </div>

        <div className="form-actions">
          <button className="cancel">Cancel</button>
          <button className="save">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;


