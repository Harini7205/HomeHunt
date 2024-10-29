import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use this for redirection
import axios from 'axios';

const LogOut = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = async () => {
    try {
      // Make a request to the logout endpoint
      await axios.post('http://localhost:5000/api/auth/logout', {}, {});
      // Redirect to the home page
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Logout error', error);
      // Optionally show an error message to the user
    }
  };

  return (
    <button onClick={handleLogout} 
    className='logout-btn'>Logout</button>
  );
};

export default LogOut;
