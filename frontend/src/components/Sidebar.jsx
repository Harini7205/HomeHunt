import React from 'react';
import {Link} from 'react-router-dom';
import UserProfile from './UserProfile';
import '../styles/Sidebar.css'; // Import the CSS file for sidebar styles
import LogOut from './LogOut';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <UserProfile />
      <div className="menu-items">
        <Link to="/dashboard" style={{textDecoration:'none', color:"white"}}><div className="menu-item">Dashboard</div></Link>
        <div className="menu-item">Properties</div>
        <Link to="/upload-property" style={{textDecoration:'none', color:"white"}}><div className="menu-item">Upload New Property</div></Link>
      </div>
      <div className="menu-items">
        <div className="menu-item">Help & Support</div>
        <LogOut />
      </div>
    </div>
  );
};

export default Sidebar;
