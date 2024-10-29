import React from 'react';
import PropertyCard from './PropertyCard (1)';
import '../styles/propertylisting (1).css';

const PropertyListing = ({ properties }) => {
  return (
    <div className="property-listing">
      {Array.isArray(properties) ? (
        properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))
      ) : (
        <p>No properties available</p>
      )}
    </div>
  );
};


export default PropertyListing;
