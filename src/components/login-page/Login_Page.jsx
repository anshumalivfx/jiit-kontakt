import React, { useRef, useContext } from "react";
import logo from "../../assets/klogo.png";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { SubmitButton } from "../common/styled-components";
import axios from "axios";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

function Login_Page() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <header className="App-header">
      <div
        className=" shadow-sm p-3 mb-5 bg-body rounded container-sm"
        style={{ maxWidth: "500px" }}
      >
        <img src={logo} alt="" style={{ width: 100 }} />
        <h3>Login</h3>
        <form className="d-flex flex-column">
          <TextField
            id="email"
            label="Email"
            variant="standard"
            inputRef={email}
            error={email === ""}
            helperText={email === "" ? "Empty field!" : " "}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            inputRef={password}
            style={{ marginTop: 30 }}
            error={password === ""}
            helperText={password === "" ? "Empty field!" : " "}
          />
          <SubmitButton
            style={{ marginTop: 20, marginLeft: "25%", marginRight: "25%" }}
            onClick={handleClick}
            type="button"
          >
            {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Login"
            )}
          </SubmitButton>
          <Link to="/sign-up" style={{ fontSize: 20, margin: 10 }}>
            {isFetching ? (
              <CircularProgress color="blue" size="20px" />
            ) : (
              "New Here? SignUp"
            )}
          </Link>
        </form>
      </div>
    </header>
  );
}

export default Login_Page;
