import React from 'react';
import { Navigate } from 'react-router-dom';
import Register from '../../../Register/ui/Register/Register';
import { useSelector } from 'react-redux';

const RegisterToken = () => {
  const token = useSelector(state => state.getToken.token);
  console.log(token);
  return <>{token ? <Navigate to="/auth/authorization" /> : <Register />}</>;
};

export default RegisterToken;
