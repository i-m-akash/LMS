import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// highlight-next-line
import { jwtDecode } from 'jwt-decode'; 
import api from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
  
      const decodedUser = jwtDecode(token); 
      setUser(decodedUser);
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const { data } = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', data.token);
      // highlight-next-line
      const decodedUser = jwtDecode(data.token); // CORRECTED FUNCTION CALL
      setUser(decodedUser);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const signup = async (username, password) => {
    try {
      const { data } = await api.post('/auth/signup', { username, password });
      localStorage.setItem('token', data.token);
      // highlight-next-line
      const decodedUser = jwtDecode(data.token); 
      setUser(decodedUser);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;