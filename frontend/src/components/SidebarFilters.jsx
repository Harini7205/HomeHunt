import React, { useState } from 'react';
import '../styles/Filter.css'

function SidebarFilters({ selected, setSelected, onFilterChange }) {
  const [isPriceActive, setIsPriceActive] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isBedroomsActive, setIsBedroomsActive] = useState(false);
  const [isAreaActive, setIsAreaActive] = useState(false);

  const handlePriceSelect = (price) => {
    setSelected(prev => ({ ...prev, price })); // Merge with existing selected filters
    onFilterChange({ ...selected, price }); // Pass merged state to parent
  };
  
  const handleLocationSelect = (location) => {
    setSelected(prev => ({ ...prev, location }));
    onFilterChange({ ...selected, location });
  };

  const handleBedroomsSelect = (bedrooms) => {
    setSelected(prev => ({ ...prev, bedrooms }));
    onFilterChange({ ...selected, bedrooms });
  };

  const handleAreaSelect = (area) => {
    setSelected(prev => ({ ...prev, area }));
    onFilterChange({ ...selected, area });
  };

  const clearAllFilters = () => {
    setSelected({});
    onFilterChange({}); // Reset filters in the parent component
  };


  return (
    <div className="sidebarfilter">
      {/* Price Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsPriceActive(!isPriceActive)}>
        Price <span className="fas fa-caret-down"></span>
      </div>
      {isPriceActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => handlePriceSelect(20000)}>Rs.20,000</div>
          <div className="sidebarfilter-item" onClick={() => handlePriceSelect(50000)}>Rs.50,000</div>
          <div className="sidebarfilter-item" onClick={() => handlePriceSelect(100000)}>Rs.1,00,000</div>
          <div className="sidebarfilter-item" onClick={() => handlePriceSelect(125000)}>Rs.1,25,000</div>
          <div className="sidebarfilter-item" onClick={() => handlePriceSelect(150000)}>Rs.1,50,000</div>
          <div className="sidebarfilter-item" onClick={() => handlePriceSelect(200000)}>Rs.2,00,000</div>
        </div>
      )}

      {/* Location Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsLocationActive(!isLocationActive)}>
        Location <span className="fas fa-caret-down"></span>
      </div>
      {isLocationActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => handleLocationSelect('Chennai')}>Chennai</div>
          <div className="sidebarfilter-item" onClick={() => handleLocationSelect('Madurai')}>Madurai</div>
          <div className="sidebarfilter-item" onClick={() => handleLocationSelect('Coimbatore')}>Coimbatore</div>
          <div className="sidebarfilter-item" onClick={() => handleLocationSelect('Trichy')}>Trichy</div>
        </div>
      )}

      {/* Bedrooms Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsBedroomsActive(!isBedroomsActive)}>
        Bedrooms <span className="fas fa-caret-down"></span>
      </div>
      {isBedroomsActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => handleBedroomsSelect(1)}>1 Bedroom</div>
          <div className="sidebarfilter-item" onClick={() => handleBedroomsSelect(2)}>2 Bedrooms</div>
          <div className="sidebarfilter-item" onClick={() => handleBedroomsSelect(3)}>3 Bedrooms</div>
          <div className="sidebarfilter-item" onClick={() => handleBedroomsSelect(4)}>4 Bedrooms</div>
        </div>
      )}

      {/* Area Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsAreaActive(!isAreaActive)}>
        Area Range <span className="fas fa-caret-down"></span>
      </div>
      {isAreaActive && (
        <div className="sidebarfilter-content">
          <div className="sidebarfilter-item" onClick={() => handleAreaSelect('500')}>500 sqft</div>
          <div className="sidebarfilter-item" onClick={() => handleAreaSelect('1000')}>1000 sqft</div>
          <div className="sidebarfilter-item" onClick={() => handleAreaSelect('1500')}>1500 sqft</div>
          <div className="sidebarfilter-item" onClick={() => handleAreaSelect('2000')}>2000 sqft</div>
        </div>
      )}
      <button className="clear-filters" onClick={clearAllFilters}>
        Clear All Filters
      </button>
    </div>
  );
}

export default SidebarFilters;
