import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PropertyDetails.css';
import jon from '../images/home-test-1.png';
import Footer from './Footer';
import { useAuth } from './AuthContext';

const PropertyDetails = () => {
  const location = useLocation();
  const {username}=useAuth();
  const {
    propertyTitle = "N/A",
    propertyImage = jon,
    propertyDesc = "Description not available",
    propertyRooms = "-",
    propertyBathrooms = "-",
    propertyType = "-",
    propertySize = "-",
    propertyLocation = "Location not specified",
    propertyPrice = "-"
  } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="property-details-container">
      <div className="property-header">
        <div className='header-line-1'>
          <h1 style={{ fontSize: 35 }}>Property Details</h1>
          <div className="user-profile">
            <img src={jon} alt="Jon Doe" />
            <span>{username || "User"}</span>
          </div>
        </div>
        <div className='header-line-2'>
          <div className='line-2-prop-name'>
            <h2 className='seaside'>{propertyTitle}</h2>
            <p className='prop-loc-header'>{propertyLocation}</p>
          </div>
          <div className='line-2-prop-price'>
            <h2 className='price1'>Price</h2>
            <p className='dollar'>{propertyPrice}</p>
          </div>
        </div>
      </div>

      <div className="property-images">
        <div className="selected-image">
          <img src={propertyImage} alt="Selected Property View" />
        </div>
      </div>
      <div className='half-half-prop-det'>
        <div className='left-half-property-details'>
          <div className="description-container">
            <h2>Description</h2>
            <p>{propertyDesc}</p>
            <hr />
            <div className="property-stats">
              <div className="stat">
                <span role="img" aria-label="bedroom">🛏️</span>
                <p>{propertyRooms} Bedrooms</p>
              </div>
              <div className="stat">
                <span role="img" aria-label="bathroom">🛁</span>
                <p>{propertyBathrooms} Bathrooms</p>
              </div>
              <div className="stat">
                <span role="img" aria-label="area">📐</span>
                <p>{propertySize} Square Feet</p>
              </div>
            </div>
          </div>
          <div className="testimonials-container">
            <h2>Testimonials</h2>
            <div className="testimonial">
              <img src={jon} alt="Rodriguez Millo" className="testimonial-image" />
              <div className="testimonial-content">
                <h3>Rodriguez Millo</h3>
                <p>Puerto Lobos, Mexico</p>
                <blockquote>
                  “The services are totally great! They offered many options for me
                  to stay that suit my budget. Also, the room is well-furnished.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="features-container right-half-property-details">
          <h2>Key Features and Amenities</h2>
          <ul>
            <li>⚡ Expansive oceanfront terrace for outdoor entertaining</li>
            <li>⚡ Gourmet kitchen with top-of-the-line appliances</li>
            <li>⚡ Private beach access for morning strolls and sunset views</li>
            <li>⚡ Master suite with a spa-inspired bathroom and ocean-facing balcony</li>
            <li>⚡ Private garage and ample storage space</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
