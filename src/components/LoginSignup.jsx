import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import homeImage from '/public/images/home.png';

function LoginSignup() {
  const [currentPage, setCurrentPage] = useState('signIn');

  const togglePage = (page) => {
    setCurrentPage(page);
  };

  const commonStyles = {
    container: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
    },
    leftSection: {
      flex: 1,
      background: `url(${homeImage}) no-repeat center center`, 
      backgroundSize: '100%',
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
    roleBtn: {
      color: 'black',
      cursor: 'pointer',
      padding:'0',
      margin:'0'
    },
    checkBox:{
      margin:'20px 0px',
      display:'flex',
      justifyContent:'center',
      gap:'30px',
    },
    checkboxOption: {
      display:'flex',
      alignItems:'center',
      gap:'10px'
    }
  };

  return (
    <div style={commonStyles.container}>
      <div style={commonStyles.leftSection}>
        {/* The image is now being used as a background for this section */}
      </div>
      <div style={commonStyles.rightSection}>
        <Link to={'/'}><button style={commonStyles.returnHomeBtn}>Return Home</button></Link>
        {currentPage === 'signIn' && <SignInPage togglePage={togglePage} styles={commonStyles} />}
        {currentPage === 'signUp' && <SignUpPage togglePage={togglePage} styles={commonStyles} />}
        {currentPage === 'forgotPassword' && <ForgotPasswordPage togglePage={togglePage} styles={commonStyles} />}
      </div>
    </div>
  );
}

function SignInPage({ togglePage, styles }) {
  const [selectedRole, setSelectedRole] = useState({
    houseOwner: false,
    tenant: false,
  });

  const navigate = useNavigate();

  const handleStateChange = (role) => {
    setSelectedRole(prevState => ({
      ...prevState,
      [role]: !prevState[role],
    }));
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (selectedRole.houseOwner) {
      navigate('/dashboard');
    } else if (selectedRole.tenant) {
      navigate('/tenant-dashboard');
    } else {
      alert('Please select a role.');
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Welcome</h2>
      <form>
        <input type="text" placeholder="Email Address / Mobile Number" style={styles.input} required />
        <input type="password" placeholder="Password" style={styles.input} required />
        <div className='checkbox' style={styles.checkBox}>
          <div style={styles.checkboxOption}>
            <input type="checkbox" checked={selectedRole.houseOwner} onChange={() => handleStateChange('houseOwner')} />
            <p style={styles.roleBtn}>House Owner</p>
          </div>
          <div style={styles.checkboxOption}>
            <input type="checkbox" checked={selectedRole.tenant} onChange={() => handleStateChange('tenant')} />
            <p style={styles.roleBtn}>Tenant</p>
          </div>
        </div>        
        <button type="submit" onClick={handleLoginClick} style={styles.button}>Login</button>
        <div style={styles.extraOptions}>
          <span onClick={() => togglePage('forgotPassword')} style={styles.link}>Forgot Password?</span>
          <p>Don't have an account? <span onClick={()=>{togglePage('signUp')}} style={styles.link}>Sign Up Now</span></p>
        </div>
      </form>
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
          <p>Already a Member? <span onClick={()=>{togglePage('signIn')}} style={styles.link}>Log In Now</span></p>
        </div>
      </form>
    </div>
  );
}

function ForgotPasswordPage({ togglePage, styles }) {
  return (
    <div style={styles.formContainer}>
      <h2>Forgot Password</h2>
      <form>
        <input type="text" placeholder="Email Address / Mobile Number" style={styles.input} required />
        <input type="password" placeholder="New Password" style={styles.input} required />
        <input type="password" placeholder="Confirm Password" style={styles.input} required />
        <button type="submit" style={styles.button}>Reset Password</button>
        <div style={styles.extraOptions}>
          <p><span onClick={() => togglePage('signIn')} style={styles.link}>Back to Login</span></p>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;
