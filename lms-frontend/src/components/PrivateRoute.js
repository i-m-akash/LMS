import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Loader from './Loader';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return <Loader />;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;