import React, { useRef, useEffect, useCallback } from 'react';
// import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Modal } from 'react-modal'
// const Background = .div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const ModalWrapper = styled.div`
  width: 900px;
  height: 900px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: fixed;
  top: 200px;
  left: 500px;
  color: #000;
  border-radius: 10px;
  top : '50%',
  left : '50%',
  right : 'auto',
  bottom : 'auto',
  marginRight : '-50%',
  transform : 'translate(-50%, -50%)',
  padding: '70px 110px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  zIndex: '10000',
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: resolution;
  top: 20px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const PromiseModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();



  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
            <ModalWrapper showModal={showModal} onclick={closeModal} >
            </ModalWrapper> 
            
      ) : null}
    </>
  );
};

export default PromiseModal
