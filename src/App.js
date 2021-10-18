import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch,Redirect, Route } from 'react-router-dom';
import Home from './pages/Homepage/HomePages';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Redirect from ='/' to='/Homepage'/>
        </Route>  
     
        <Route path='/Homepage' exact component={Home}/>
        
        <Route path='/about'/>
        <Route path='/services' />
        <Route path='/contact-us'/>
        <Route path='/sign-up'/>
      </Switch>
    </Router>
  );
}

export default App;