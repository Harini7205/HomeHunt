import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <NavBar />
      <div className='about-us-container'>
        <h2>About Us</h2>
        <p>Welcome to HomeHunt, where we make finding your dream home easier and more efficient. Whether you're looking to buy, rent, or lease, our platform bridges the gap between property owners and seekers, ensuring an immaculate experience for all.</p>
        <h2>Our Mission</h2>
        <p>Our mission is to simplify the real estate process by providing a user-friendly platform that connects people with their dream homes. We combine powerful search tools, advanced filtering options, and personalized recommendations to help you find exactly what you're looking for.</p>
        <h2>Our Vision</h2>
        <p>We aim to stir up the real estate market by making property search and management accessible, transparent, and efficient. We believe in making the journey of finding a home as enjoyable and stress-free as possible.</p>
        <h2>Our Team</h2>
        <p>We are a dedicated team of programmers and designers who are passionate about helping you find the perfect home. Our diverse skills and expertise come together to create a platform that truly puts the user first.
        Thank you for selecting HomeHunt. We're here to help you every step of the way.</p>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
