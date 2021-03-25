import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import sprite from '../../icons/symbol-defs.svg';
import Overlay from './ModalStyled';

const Modal = ({ onClose, isOpen, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleEscape = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target.dataset?.zone) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick} data-zone="overlay">
      <CSSTransition
        in={isOpen}
        appear={true}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="Modal">
          {children}
          <button className="modalBtn" onClick={onClose} type="button">
            <svg className="modalIcon" width="24px" height="24px">
              <use href={sprite + '#icon-cross'} />
            </svg>
          </button>
        </div>
      </CSSTransition>
    </Overlay>
  );
};

export default Modal;
