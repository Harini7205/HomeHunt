import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import homeImage from '../images/home.png';

function LoginSignup() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('signIn');

  const togglePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (location.pathname === '/signin') {
      setCurrentPage('signIn');
    } else if (location.pathname === '/signup') {
      setCurrentPage('signUp');
    }
  }, [location.pathname]);

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
      padding: '0',
      margin: '0'
    },
    checkBox: {
      margin: '20px 0px',
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
    },
    checkboxOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  };

  return (
    <div style={commonStyles.container}>
      <div style={commonStyles.leftSection}></div>
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleStateChange = (role) => {
    setSelectedRole(prevState => ({
      ...prevState,
      [role]: !prevState[role],
    }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password, role: selectedRole });

      localStorage.setItem('userInfo', JSON.stringify(data));

      if (data.role === 'houseOwner') {
        navigate('/dashboard');
      } else if (data.role === 'tenant') {
        navigate('/tenant-search');
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      alert(response.data.message); // Show success message
    } catch (error) {
      alert('Error sending reset password email');
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Welcome</h2>
      <form>
        <input
          type="text"
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
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
        <button style={styles.button} onClick={handleLoginClick}>
          Log In
        </button>
        <p style={{ marginTop: '10px' }}>
          <span onClick={handleForgotPassword} style={styles.link}>Forgot Password?</span>
        </p>
        <p>Don't have an account? <span onClick={() => togglePage('signUp')} style={styles.link}>Sign Up</span></p>
      </form>
    </div>
  );
}

function SignUpPage({ togglePage, styles }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleSignUpClick = async (e) => {
    e.preventDefault();

    const role = selectedRole.houseOwner ? 'houseOwner' : selectedRole.tenant ? 'tenant' : null; // Check selected role

    if (!role) {
      alert('Please select a role.');
      return; // Don't proceed if no role is selected
    }

    try {
      console.log('Sign Up Data:', { name, email, password, role });
      const { data } = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
      console.log('Response Data:', data);

      localStorage.setItem('userInfo', JSON.stringify(data));

      if (data.role === 'houseOwner') {
        navigate('/dashboard');
      } else if (data.role === 'tenant') {
        navigate('/tenant-search');
      }
    } catch (error) {
      console.log(error);
      alert('Registration failed');
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Create an account</h2>
      <form onSubmit={handleSignUpClick}>
        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
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
        <button type="submit" style={styles.button}>Sign Up</button>
        <div style={styles.extraOptions}>
          <p>Already a Member? <span onClick={() => togglePage('signIn')} style={styles.link}>Log In Now</span></p>
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
        <input type="text" placeholder="Email Address" style={styles.input} required />
        <input type="submit" style={styles.button} value="Reset Password" />
        <p>Remembered your password? <span onClick={() => togglePage('signIn')} style={styles.link}>Log In</span></p>
      </form>
    </div>
  );
}

export default LoginSignup;
