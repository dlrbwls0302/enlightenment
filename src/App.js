import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Main from './pages/Main';
import Opinions from './pages/Opinions';
import Xfile from './pages/Xfile';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Modal from 'react-modal';
import { changeModal } from './actions';
import { BiX } from "react-icons/bi";
import kakaoImg from './images/kakao2.png';
import googleImg from './images/google1.png';
import Footer from './components/Footer';

Modal.setAppElement('#root');
const App = () => {
  const [isLogin, setLogin] = useState(false);
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.modalReducer);
  const ec2Url = 'http://ec2-3-34-52-239.ap-northeast-2.compute.amazonaws.com:5000';

  useEffect(() => {
    if (document.cookie.includes('userId')) {
      const cookies = document.cookie.split(';');
      let userIdCookie = ''
      cookies.forEach(cookie => {
        if (cookie.indexOf('userId') !== -1) userIdCookie = cookie;
      })
      setUserId(Number(userIdCookie.slice(userIdCookie.indexOf('=') + 1)));
      setLogin(true);
    }
  })

  const onClick = () => {
    dispatch(changeModal());
  }

  return (
    <div className='body'>
      <div className='wrapper'>
        <div className='modal'>
            <Modal
              isOpen={state.modalIsOpen}
              onRequestClose={onClick}
              shouldCloseOnEsc={true}
              style={{
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  zIndex: '10000',
                  width: '350px',
                  height: '300px',
                  justifyContent: 'center'
                }
              }}
            >
              <div className='modalClose' onClick={onClick}><BiX size={25} /></div>
              <h2 className='modalHeading'>ENLIGHTMENT</h2>
              <div className='logoBox'>
                <div className='kakao'>
                  <img src={kakaoImg} alt='mapImg' />
                </div>
                <div className='google'>
                  <a href={`${ec2Url}/auth/google/login`}>
                    <img src={googleImg} alt='mapImg' />
                  </a>
                </div>
              </div>
            </Modal>
          
      </div>
        <Router>
          <HeaderNav isLogin={isLogin} userId={userId} setLogin={setLogin} setUserId={setUserId} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/xfile" component={() => { return <Xfile isLogin={isLogin} userId={userId} /> }} />
            <Route path="/community" component={Opinions} />
          </Switch>
        </Router>
      </div>
      <Footer></Footer>      
    </div>
  );
};

export default App;