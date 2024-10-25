import React from 'react';

const DashboardHeader = () => {
  return (
    <h1 style={styles.header}>Dashboard</h1>
  );
};

const styles = {
  header: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  }
};

export default DashboardHeader;
