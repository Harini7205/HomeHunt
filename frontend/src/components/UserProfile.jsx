import React from 'react';
import profilePic from '../images/profile.png'; // Ensure the correct path

const UserProfile = () => {
  return (
    <div style={styles.profileContainer}>
      <img src={profilePic} alt="Profile" style={styles.profileImage} />
      <p style={styles.profileName}>John Doe</p>
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
  },
  profileImage: {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  profileName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default UserProfile;
