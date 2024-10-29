import React from 'react';
import { FaHome, FaBath, FaCar } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';
import '../styles/PropertyCard (1).css';

const PropertyCard = ({ property }) => {

  return (
    <div className="property-card">
      {/* Image Container */}
      <div className="property-image-container">
        <img src={property.image} alt={property.title} className="property-image" />
      </div>

      {/* Property Details */}
      <div className="property-details">
        {/* Price and Location */}
        <h2 className='property-title'>{property.title}</h2>
        <h2 className="property-price">Rs.{property.price.toLocaleString()} / Year</h2>

        {/* Overview Section */}
        <div className="overview-grid">
          <div className="overview-item">
            <FaHome className="icon" />
            <span>Bedroom</span>          
            <p>{property.rooms}</p>
          </div>
          <div className="overview-item">
            <FaHome className="icon" />
            <span>Type</span>
            <p>{property.type}</p>
          </div>
          <div className="overview-item">
            <FaBath className="icon" />
            <span>Bath</span>
            <p>{property.bathroom || 2}</p>
          </div>
          <div className="overview-item">
            <FaCar className="icon" />
            <span>Parking</span>
            <p>{property.parking || 'Yes'}</p>
          </div>
          <div className="overview-item">
            <BiArea className="icon" />
            <span>Area</span>
            <p>{property.size}sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;


