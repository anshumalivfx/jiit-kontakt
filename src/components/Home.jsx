import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component {

  logout = () => {
    
    axios
      .get("http://localhost:3000/jiitkontakt/auth/logout.php")
      .then((res) => {
        // delete tokens
        localStorage.removeItem("access_token");
        console.log(res);
        this.props.history.push("/login");
      });
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
