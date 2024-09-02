import React from 'react';
import Sidebar from './Sidebar';
import PropertiesSection from './PropertiesSection';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar CSS
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="mainContent">
        <h1>Dashboard</h1>
        <div className="dashboard-container">
          {/* Dashboard Statistics Boxes */}
          <div className="dashboard-stats">
            <div className="dashboard-box box1">1000 <span>Total</span></div>
            <div className="dashboard-box box2">500 <span>Rented</span></div>
            <div className="dashboard-box box3">300 <span>Leased</span></div>
            <div className="dashboard-box box4">200 <span>Balance</span></div>
          </div>
          {/* Calendar Component */}
          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
        <PropertiesSection />
      </div>
    </div>
  );
};

export default Dashboard;
