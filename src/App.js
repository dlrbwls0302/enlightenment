import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Main from './pages/Main';
import Map from './pages/Map';
import News from './pages/News';
import Opinions from './pages/Opinions';
import Promise from './pages/Promise';
import { useDispatch } from 'react-redux'
import { loadElections } from './actions/index'
import './App.css';
// import Modal from 'react-modal';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:5000/map/elections')
    .then(res => {
      return res.json()
    })
    .then(elections => {     
      dispatch(loadElections(elections))
    })
  }, []);

  const customStyles = {
    content: {
      
    }
  }
  
  return (
    <div className='body'>
      <div className='wrapper'>
        {/* <Modal 
        
        >
           <h2>Modal title</h2>
           <p>Modal Body</p>
        </Modal> */}
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={Main}/>
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