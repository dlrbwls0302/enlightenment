import React, { useRef, useEffect, useCallback } from 'react';
// import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Modal } from 'react-modal'
// const Background = .div`
//   width: 100%;
//   height: 100%;
//   justify-content: start;
//   align-items: left;
//   border-radius: 10px 0 0 10px;
//   color: #141414;
//   p {
//     text-align: left;
//     justify-content: start;
//     align-items: left;
//     margin-top: 5rem;
//   }
//   `;    

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;

// const PromiseModal = ({ showModal, setShowModal, currentCandidate }) => {
//   const modalRef = useRef();

//   const animation = useSpring({
//     config: {
//       duration: 250
//     },
//     opacity: showModal ? 1 : 0,
//     transform: showModal ? `translateY(0%)` : `translateY(-100%)`
//   });

//   const closeModal = e => {
//     if (modalRef.current === e.target) {
//       setShowModal(false);
//     }
//   };

//   const keyPress = useCallback(
//     e => {
//       if (e.key === 'Escape' && showModal) {
//         setShowModal(false);
//         console.log('I pressed');
//       }
//     },
//     [setShowModal, showModal]
//   );

//   useEffect(
//     () => {
//       document.addEventListener('keydown', keyPress);
//       return () => document.removeEventListener('keydown', keyPress);
//     },
//     [keyPress]
//   );

//   return (
//     <>
//       {showModal ? (
//         <Background onClick={closeModal} ref={modalRef}>
//           <animated.div style={animation}>
//             <ModalWrapper showModal={showModal}>
//               <ModalContent>
//                 <h1>{currentCandidate.name}</h1>
//                 <span>{currentCandidate.candidateInfo.jdName}</span>
//               </ModalContent>
//               <CloseModalButton
//                 aria-label='Close modal'
//                 onClick={() => setShowModal(prev => !prev)}
//               />
//                          <ModalImg >    
//                              <p>      {currentCandidate.promise.first}  </p>
//                              <p>      {currentCandidate.promise.second}  </p>
//                              <p>      {currentCandidate.promise.third}  </p>
//                              <p>      {currentCandidate.promise.fourth}  </p>
//                          </ModalImg>
//             </ModalWrapper>
//           </animated.div>
//         </Background>
//       ) : null}
//     </>
//   );
// };

// export default PromiseModal
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../App.css'

Modal.setAppElement('#root');

const PromiseModal = ({}) => {
    return (
    <div className='modal'>
<Modal 
  shouldCloseOnEsc={true}
  style={{
    content : {
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
    }
  }}
>
  <h2 className='modalHeading'>당신의 선택</h2>
  <div className='logoBox'>
    <div className='kakao'>
    </div>
    <div className='google'>
      <a href="http://localhost:5000/auth/google/login">
      </a>
    </div>
  </div> 
</Modal>
</div>
    )
}

export default PromiseModal