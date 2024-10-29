import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard (1).jsx';
import SidebarFilters from './SidebarFilters.jsx';
import '../styles/tenanthomepage.css';
import { useAuth } from './AuthContext'; // Import the Auth context to get user info
import userLogo from '../images/home-test-1.png';
import LogOut from './LogOut.jsx';

export default function TenantHomePage() {
  const { userName} = useAuth(); // Get the user's name and logout function from the Auth context
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({});
  // Fetch properties from the API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties'); // Adjust the URL as needed
        const data = await response.json();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []); // Run once when the component mounts

  const handleFilterChange = (selectedFilters) => {
    let filtered = properties;

    // Filter based on price if specified
    if (selectedFilters.price) {
      filtered = filtered.filter(property => property.price <= selectedFilters.price);
    }

    // Filter based on location if specified
    if (selectedFilters.location) {
      filtered = filtered.filter(property => property.location === selectedFilters.location);
    }

    // Filter based on bedrooms if specified
    if (selectedFilters.bedrooms) {
      filtered = filtered.filter(property => property.rooms === selectedFilters.bedrooms);
    }

    // Filter based on area if specified
    if (selectedFilters.area) {
      filtered = filtered.filter(property => property.size <= selectedFilters.area);
    }

    setFilteredProperties(filtered.length > 0 ? filtered : []);
  };

  return (
    <div className="tenant-home-page-overall">
      <div className="header">
        <div className="user-info">
          <img src={userLogo} alt="User Logo" className="user-logo" />
          <span>{userName || 'User'}</span> {/* Display the user's name or 'Guest' */}
        </div>
        <LogOut />
      </div>
      <div className='tenant-home-page'>
      <div className='sidebar-filters-tenant-homepage'>
        <SidebarFilters selected={selectedFilter} setSelected={setSelectedFilter} onFilterChange={handleFilterChange} />
      </div>
      <div className='property-listing-tenant-homepage'>
        {Array.isArray(filteredProperties) && filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <div className='property-card' key={index}>
              <PropertyCard property={property} />
            </div>
          ))
        ) : (
          <p>No properties available</p>
        )}
      </div>
      </div>
    </div>
  );
}
