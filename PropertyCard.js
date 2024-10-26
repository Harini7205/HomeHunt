import React from 'react';
import { FaHome, FaBath, FaCar, FaCalendarAlt } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  const imgPath = require(`../Images/${property.image}`);

  return (
    <div className="property-card">
      {/* Image Container */}
      <div className="property-image-container">
        <img src={imgPath} alt={property.title} className="property-image" />
      </div>

      {/* Property Details */}
      <div className="property-details">
        {/* Price and Location */}
        <h2 className="property-price">${property.price.toLocaleString()} / Year</h2>
        <p className="property-location">
          <FaHome /> {property.location}
        </p>

        {/* Overview Section */}
        <div className="property-overview">
          <h3>Overview</h3>
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
              <p>{property.bathroom || 2}</p> {/* Fallback if no bathroom is provided */}
            </div>
            <div className="overview-item">
              <FaCar className="icon" />
              <span>Parking</span>
              <p>{property.parking || 'Yes'}</p> {/* Example */}
            </div>
            <div className="overview-item">
              <BiArea className="icon" />
              <span>Sqft</span>
              <p>{property.size} sqft</p>
            </div>
            <div className="overview-item">
              <FaCalendarAlt className="icon" />
              <span>Build Year</span>
              <p>{property.yearBuilt || 2020}</p> {/* Example */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

