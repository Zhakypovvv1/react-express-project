import React from 'react';
import s from './ErrorAlert.module.scss';

const errorAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div className={s.errorAlert}>
      <p>{message}</p>
    </div>
  );
};

export default errorAlert;
