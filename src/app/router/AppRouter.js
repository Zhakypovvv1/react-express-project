import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import AuthorizationPage from '../../pages/AuthorizationPage/AuthorizationPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/auth/authorization' element={<AuthorizationPage />} />
      <Route path='/auth/register' element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRouter;
