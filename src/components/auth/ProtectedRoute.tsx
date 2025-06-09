import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// This is a simple auth check - you should replace this with your actual auth logic
const isAuthenticated = () => {
  return localStorage.getItem('adminToken') !== null;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 