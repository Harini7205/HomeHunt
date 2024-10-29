import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Create AuthContext
const AuthContext = createContext();

// Create a custom hook for easy access to AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around your application
export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo ? JSON.parse(savedUserInfo) : null;
  });

  const login = async (email, password, role) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password, role });
      setUserInfo(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (name, email, password, role) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
      setUserInfo(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem('userInfo');
  };

  const value = {
    userInfo,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
