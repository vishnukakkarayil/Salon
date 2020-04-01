import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Login/Register';
import Home from '../src/Pages/Home';


function App() {
  return (
    <Router>
      {/* <Link to= */}
      <Switch>
          <Route exact path="/" component={()=><Login />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={()=> <Home />} />
          <Route component={Error} />
      </Switch>
    </Router>     
  );
}

export default App;
