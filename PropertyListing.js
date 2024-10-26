import React from 'react';
import PropertyCard from './PropertyCard';
import '../styles/propertylisting.css';

const PropertyListing = ({ properties }) => {
  return (
    <div className="property-listing">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
};

export default PropertyListing;
