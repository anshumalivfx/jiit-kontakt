import React, { Component } from "react";
import "./App.css";
import Login_Page from "./components/login-page/Login_Page.jsx";
import Home from "./pages/home/Home.jsx";
import SignUpPage from "./components/signup-page/SignUpPage";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/profile/Profile";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    axios
      .get("http://localhost:3000/jiitkontakt/auth/login.php")
      .then((res) => {
        if (res.data.auth === true) {
          this.setState({
            isLoggedIn: true,
          });
        } else {
          this.setState({
            isLoggedIn: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div>
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
}

export default App;
