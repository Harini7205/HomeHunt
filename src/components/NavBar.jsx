import React from 'react';
import logo from '../images/logo.png';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="navbar-logo" className='navbar-logo'/>
      <div className='navbar-options'>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="about-us">About Us</a>
      </div>
    </div>
  )
}

export default NavBar
