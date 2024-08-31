import React, { useState } from 'react';
import homeImage from './Assets/home.png';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const togglePage = () => {
    setIsSignUp(!isSignUp);
  };

  const commonStyles = {
    container: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
    },
    leftSection: {
      flex: 1,
      background: `url(${homeImage}) no-repeat center center`, // Set the image as the background
      backgroundSize: 'cover',
    },
    rightSection: {
      flex: 1,
      backgroundColor: '#E0F7FA',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    returnHomeBtn: {
      alignSelf: 'flex-start',
      marginBottom: '20px',
      background: 'none',
      border: 'none',
      color: '#000',
      fontSize: '16px',
      cursor: 'pointer',
    },
    formContainer: {
      background: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    extraOptions: {
      marginTop: '15px',
    },
    link: {
      color: '#0000FF',
      cursor: 'pointer',
    },
    roleSelection: {
      marginTop: '20px',
    },
    roleBtn: {
      backgroundColor: '#7B1FA2',
      color: 'white',
      padding: '10px 20px',
      margin: '5px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={commonStyles.container}>
      <div style={commonStyles.leftSection}>
        {/* The image is now being used as a background for this section */}
      </div>
      <div style={commonStyles.rightSection}>
        <button style={commonStyles.returnHomeBtn}>Return Home</button>
        {isSignUp ? <SignUpPage togglePage={togglePage} styles={commonStyles} /> : <SignInPage togglePage={togglePage} styles={commonStyles} />}
      </div>
    </div>
  );
}

function SignInPage({ togglePage, styles }) {
  return (
    <div style={styles.formContainer}>
      <h2>Welcome</h2>
      <form>
        <input type="text" placeholder="Email Address / Mobile Number" style={styles.input} required />
        <input type="password" placeholder="Password" style={styles.input} required />
        <button type="submit" style={styles.button}>Login</button>
        <div style={styles.extraOptions}>
          <a href="#" style={{ color: '#000' }}>Forgot Password?</a>
          <p>Don't have an account? <span onClick={togglePage} style={styles.link}>Sign Up Now</span></p>
        </div>
      </form>
      <div style={styles.roleSelection}>
        <button style={styles.roleBtn}>House Owner</button>
        <button style={styles.roleBtn}>Tenant</button>
      </div>
    </div>
  );
}

function SignUpPage({ togglePage, styles }) {
  return (
    <div style={styles.formContainer}>
      <h2>Create an account</h2>
      <form>
        <input type="text" placeholder="Full Name" style={styles.input} required />
        <input type="text" placeholder="Email Address / Mobile Number" style={styles.input} required />
        <input type="password" placeholder="Password" style={styles.input} required />
        <button type="submit" style={styles.button}>Sign Up</button>
        <div style={styles.extraOptions}>
          <p>Already a Member? <span onClick={togglePage} style={styles.link}>Log In Now</span></p>
        </div>
      </form>
    </div>
  );
}

export default App;