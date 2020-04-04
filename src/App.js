import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Login/Register';
import Home from '../src/Components/Pages/Home/Home';

import './App.css';

function App() {
  return (
    <Router>
      {/* <Link to= */}
      <Switch>
        <Route exact path="/" component={() => <Login />} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={() => <Home />} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
