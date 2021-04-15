import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Main from './pages/Main';
import Map from './pages/Map';
import News from './pages/News';
import Opinions from './pages/Opinions';
import Promise from './pages/Promise';
import Xfile from './pages/Xfile';
import { useDispatch, useSelector } from 'react-redux'
import { loadElections } from './actions/index'
import './App.css';
import Modal from 'react-modal';
import { changeModal } from './actions';
import { BiX } from "react-icons/bi";
import kakaoImg from './images/kakao2.png';
import googleImg from './images/google1.png';

Modal.setAppElement('#root');
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.modalReducer);

  useEffect(() => {
    fetch('http://localhost:5000/map/elections')
    .then(res => {
      return res.json()
    })
    .then(elections => {     
      dispatch(loadElections(elections))
    })
  }, []);


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
          <div className='modalClose' onClick={onClick}><BiX size={34}/></div>
          <h2 className='modalHeading'>당신의 선택</h2>
          <div className='logoBox'>
            <div className='kakao'>
              <img src={kakaoImg} alt='mapImg'/>  
            </div>
            <div className='google'>
              <a href="http://localhost:5000/auth/google/login">
                <img src={googleImg} alt='mapImg'/>   
              </a>
            </div>
          </div> 
        </Modal>
        </div>
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/xfile" component={Xfile}/>
            <Route path="/map" component={Map}/>
            <Route path="/news" component={News}/>
            <Route path="/opinion" component={Opinions}/>
            <Route path="/promise" component={Promise}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;