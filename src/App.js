import React, { Component }  from 'react';
import './App.css';
import Login_Page from './components/login-page/Login_Page.jsx'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import SignUpPage from './components/signup-page/SignUpPage';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/login" component={Login_Page} />
          <Route path="/" component={Home} />
        </Switch>
   </Router>
    </div>
    </>
  );
}

export default App;
