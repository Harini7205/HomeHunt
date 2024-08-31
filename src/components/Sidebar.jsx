import React from 'react';
import UserProfile from './UserProfile';
import './Sidebar.css'; // Import the CSS file for sidebar styles

const Sidebar = () => {
  return (
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
        <div className="menu-item">Log Out</div>
      </div>
    </div>
  );
};

export default Sidebar;
