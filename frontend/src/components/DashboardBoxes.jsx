import React from 'react';

const DashboardBoxes = () => {
  const boxes = [
    { number: 150, text: 'Total Properties', color: '#EA635A' },   // Red
    { number: 45, text: 'Rented', color: '#EAAB5A' },              // Blue
    { number: 78, text: 'Leased', color: '#88EA5A' },              // Orange
    { number: 21, text: 'Balance', color: '#9E5BE6' }              // Purple
  ];

  return (
    <div style={styles.container}>
      {boxes.map((box, index) => (
        <div key={index} style={{ ...styles.box, backgroundColor: box.color }}>
          <div style={styles.number}>{box.number}</div>
          <div style={styles.text}>{box.text}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  box: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    height: '100px',
    width: '250px', // Increased width for more prominence
    color: '#fff',  // White text for contrast
  },
  number: {
    fontSize: '50px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '14px',
    marginTop: 'auto',
  },
};

export default DashboardBoxes;
