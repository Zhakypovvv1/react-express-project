import React from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import classNames from 'classnames';

const Modal = ({ isOpen, onClose, children, size = 'medium' }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div
        className={classNames(s.modal, s[size])}
        onClick={e => e.stopPropagation()}
      >
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={s.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
