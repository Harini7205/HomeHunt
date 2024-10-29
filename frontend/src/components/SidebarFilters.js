import React, { useState } from 'react';
import '../styles/Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function SidebarFilters({ selected, setSelected }) {
  const [isPriceActive, setIsPriceActive] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isBedroomsActive, setIsBedroomsActive] = useState(false);
  const [isAreaActive, setIsAreaActive] = useState(false);

  return (
    <div className="sidebarfilter">
      {/* Price Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsPriceActive(!isPriceActive)}>
        Price <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isPriceActive && (
        <div className="sidebarfilter-content">
          {[12000, 150000, 95000, 175000, 130000, 140000].map(price => (
            <div
              key={price}
              className="sidebarfilter-item"
              onClick={() => setSelected({ ...selected, price })}
            >
              ${price.toLocaleString()}
            </div>
          ))}
        </div>
      )}

      {/* Location Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsLocationActive(!isLocationActive)}>
        Location <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isLocationActive && (
        <div className="sidebarfilter-content">
          {['Los Angeles', 'New York', 'San Francisco', 'Miami'].map(location => (
            <div
              key={location}
              className="sidebarfilter-item"
              onClick={() => setSelected({ ...selected, location })}
            >
              {location}
            </div>
          ))}
        </div>
      )}

      {/* Bedrooms Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsBedroomsActive(!isBedroomsActive)}>
        Bedrooms <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isBedroomsActive && (
        <div className="sidebarfilter-content">
          {[1, 2, 3, 4].map(bedrooms => (
            <div
              key={bedrooms}
              className="sidebarfilter-item"
              onClick={() => setSelected({ ...selected, bedrooms })}
            >
              {bedrooms} Bedroom{bedrooms > 1 ? 's' : ''}
            </div>
          ))}
        </div>
      )}

      {/* Area Filter */}
      <div className="sidebarfilter-btn" onClick={() => setIsAreaActive(!isAreaActive)}>
        Area Range <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isAreaActive && (
        <div className="sidebarfilter-content">
          {['500-1000 sqft', '1000-1500 sqft', '1500-2000 sqft', '2000+ sqft'].map(area => (
            <div
              key={area}
              className="sidebarfilter-item"
              onClick={() => setSelected({ ...selected, area })}
            >
              {area}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarFilters;

