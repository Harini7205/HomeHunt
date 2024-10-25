import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PropertyDetails from './components/PropertyDetails.jsx';
import LoginSignUpPage from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs.jsx';
import ResetPassword from './components/ResetPassword.jsx';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
