import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';

const ProtectedRoute: React.FC = () => {

  const token = localStorage.getItem('token');



  return token ? <ProductList /> : <Navigate to="/" />;
};

export default ProtectedRoute;