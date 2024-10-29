import React from 'react';
import propertyImage from '../images/property.jpeg'; // Ensure this path is correct
import '../styles/PropertiesSection.css';

const PropertiesSection = () => {
  const properties = [
    { name: 'Luxury Villa', price: '$1,200,000', location: 'Beverly Hills, CA' },
    { name: 'Modern Apartment', price: '$850,000', location: 'New York, NY' },
    { name: 'Beach House', price: '$950,000', location: 'Malibu, CA' },
    { name: 'Cozy Cottage', price: '$500,000', location: 'Aspen, CO' },
    { name: 'Urban Loft', price: '$780,000', location: 'San Francisco, CA' },
    { name: 'Country House', price: '$600,000', location: 'Nashville, TN' },
    { name: 'Penthouse Suite', price: '$1,500,000', location: 'Miami, FL' },
    { name: 'Mountain Retreat', price: '$700,000', location: 'Denver, CO' },
    { name: 'Suburban Home', price: '$400,000', location: 'Austin, TX' },
  ];

  return (
    <div className="properties-container">
      <h2 className="properties-heading">Properties</h2>
      <div className="properties-grid">
        {properties.map((property, index) => (
          <div key={index} className="ps-property-card">
            <img src={propertyImage} alt="Property" className="ps-property-image" />
            <div className="ps-property-details">
              <h3 className="ps-property-name">{property.name}</h3>
              <p className="ps-property-price">{property.price}</p>
              <p className="ps-property-location">{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesSection;
