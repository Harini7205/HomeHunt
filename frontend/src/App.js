import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PropertyDetails from './components/PropertyDetails.jsx';
import LoginSignUpPage from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import TestimonialsPage from './components/TestimonialsPage';
import PropertyListing from './components/PropertyListing.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewprop" element={<PropertyDetails />} />
          <Route path="/signin" element={<LoginSignUpPage />} />
          <Route path="/signup" element={<LoginSignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/viewtestimonials" element={<TestimonialsPage />} />
          <Route path="/tenant-search" element={<PropertyListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
