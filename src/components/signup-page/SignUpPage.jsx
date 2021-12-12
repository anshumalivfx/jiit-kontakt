import React, { Component, useContext, useRef } from "react";
import logo from "../../assets/klogo.png";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import { SubmitButton } from "../common/styled-components";
import axios from "axios";
import { useHistory } from "react-router";

const ProfPic = styled.img`
  &:hover {
    -moz-box-shadow: 0 0 5px 5px #ff7979;
    -webkit-box-shadow: 0 0 5px 5px #29b0ff;
    box-shadow: 0 0 5px 5px #0057fa;
  }
`;

export default function SignUpPage() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const history = useHistory();
  function inputToURL(inputElement) {
    var file = inputElement.files[0];
    return window.URL.createObjectURL(file);
  }
  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleClick = async (e) => {
    if (!validateEmail(email.current.value)) {
      alert("Please enter a valid email");
      return;
    }
    if (password.current.value.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    if (!username.current.value) {
      alert("Please enter a username");
      return;
    } else {
      e.preventDefault();
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      const data = new FormData();
      data.append("username", username.current.value);
      data.append("email", email.current.value);
      data.append("password", password.current.value);

      try {
        await axios.post("/auth/register", user);
        await axios
          .post("http://localhost:3000/jiitkontakt/auth/signup.php", data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <header className="App-header">
      <div
        className=" shadow-sm p-3 mb-5 bg-body rounded container-sm"
        style={{ maxWidth: "500px" }}
      >
        <img src={logo} alt="" style={{ width: 100 }} />

        <h3>SignUp</h3>

        {/* <img src={this.state.profilepicture} alt="" style={{width: 200, height: 200}} className="rounded-circle"/> */}

        {/* <input type="image" src={this.state.profilepicture} alt="Submit Form" className="rounded-circle" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="Username"
            label="username"
            variant="standard"
            inputRef={username}
            required
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            inputRef={email}
            required
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            inputRef={password}
            required
          />
          <SubmitButton
            className="w-50"
            style={{ marginTop: 20, marginLeft: "25%", marginRight: "25%" }}
            onClick={handleClick}
          >
            SignUp
          </SubmitButton>
          <Link to="/login" style={{ fontSize: 20, margin: 10 }}>
            Already have an account? Login
          </Link>
        </div>
      </div>
    </header>
  );
}
