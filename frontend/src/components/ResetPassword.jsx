import React, { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const resetToken = searchParams.get('token');
  const handleResetPasswordClick = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
        token: resetToken,
        password: newPassword,
      });
      if (response.data.success) {
        setMessage('Password has been reset successfully.');
      } else {
        setMessage('Failed to reset password.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  const commonStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      backgroundColor: '#f4f4f4', // Light background for contrast
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
    message: {
      marginTop: '15px',
      color: 'red',
    },
  };

  return (
    <div style={commonStyles.container}>
      <div style={commonStyles.formContainer}>
        <h2>Reset Your Password</h2>
        <form onSubmit={handleResetPasswordClick}>
          <input
            type="password"
            placeholder="New Password"
            style={commonStyles.input}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            style={commonStyles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" style={commonStyles.button}>
            Reset Password
          </button>
          {message && <p style={commonStyles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
