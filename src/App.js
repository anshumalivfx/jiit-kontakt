import React, { Component, useContext } from "react";
import "./App.css";
import Login_Page from "./components/login-page/Login_Page.jsx";
import Home from "./pages/home/Home.jsx";
import SignUpPage from "./components/signup-page/SignUpPage";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import { HomeWorkOutlined } from "@material-ui/icons";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/sign-up">
              {user ? <Redirect to="/" /> : <SignUpPage />}
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login_Page />}
            </Route>
            <Route path="/profile/:username" component={Profile} />
            <Route exact path="/" component={user ? Home : SignUpPage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
