import React, { useState } from 'react';
import '../styles/Filter.css';

function SidebarFilters({ selected, setSelected }) {
  const [isPriceActive, setIsPriceActive] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isBedroomsActive, setIsBedroomsActive] = useState(false);
  const [isAreaActive, setIsAreaActive] = useState(false);

  return (
    <div className="sidebarfilter">
      {/* Price Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsPriceActive(!isPriceActive)}>
        Price <span className="fas fa-caret-down"></span>
      </div>
      {isPriceActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, price: 12000 })}>$12,000</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, price: 150000 })}>$150,000</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, price: 95000 })}>$95,000</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, price: 175000 })}>$175,000</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, price: 130000 })}>$130,000</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, price: 140000 })}>$140,000</div>
        </div>
      )}

      {/* Location Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsLocationActive(!isLocationActive)}>
        Location <span className="fas fa-caret-down"></span>
      </div>
      {isLocationActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, location: 'Los Angeles' })}>Los Angeles</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, location: 'New York' })}>New York</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, location: 'San Francisco' })}>San Francisco</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, location: 'Miami' })}>Miami</div>
        </div>
      )}

      {/* Bedrooms Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsBedroomsActive(!isBedroomsActive)}>
        Bedrooms <span className="fas fa-caret-down"></span>
      </div>
      {isBedroomsActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, bedrooms: 1 })}>1 Bedroom</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, bedrooms: 2 })}>2 Bedrooms</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, bedrooms: 3 })}>3 Bedrooms</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, bedrooms: 4 })}>4 Bedrooms</div>
        </div>
      )}

      {/* Area Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsAreaActive(!isAreaActive)}>
        Area Range <span className="fas fa-caret-down"></span>
      </div>
      {isAreaActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, area: '500-1000 sqft' })}>500-1000 sqft</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, area: '1000-1500 sqft' })}>1000-1500 sqft</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, area: '1500-2000 sqft' })}>1500-2000 sqft</div>
          <div className="sidebarfilter-item" onClick={() => setSelected({ ...selected, area: '2000+ sqft' })}>2000+ sqft</div>
        </div>
      )}
    </div>
  );
}

export default SidebarFilters;
