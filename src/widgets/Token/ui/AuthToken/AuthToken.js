import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Authorization from '../../../Authorization/ui/Authorization/Authorization';

const AuthToken = () => {
  const token = useSelector(state => state.getToken.token);
  console.log(token);
  return <>{token ? <Navigate to="/" /> : <Authorization />}</>;
};

export default AuthToken;
