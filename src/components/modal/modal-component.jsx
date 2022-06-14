import React from 'react';

import { ModalBackground, ModalContainer } from './modal-styles';
const Modal = ({ children, setShowModal }) => {
  return (
    <>
      <ModalBackground></ModalBackground>
      <ModalContainer>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <p
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              padding: '0 10px 0 0',
              cursor: 'pointer',
              margin: '0',
            }}
            onClick={() => setShowModal(false)}
          >
            x
          </p>
        </div>
        {children}
      </ModalContainer>
      {/* <div
        style={{
          backgroundColor: 'white',
          width: '50%',
          height: '60%',
          opacity: 1,
          borderRadius: '10px',
          position: 'fixed',
          zIndex: 20,
          top: '20%',
          left: '25%',
        }}
      ></div> */}
    </>
  );
};

export default Modal;
