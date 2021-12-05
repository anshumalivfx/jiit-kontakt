import React from "react";
import logo from "../../assets/klogo.png";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { SubmitButton } from "../common/styled-components";
import axios from "axios";

class Login_Page extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
    this.login = this.login.bind(this);
  }
  login() {
    var email = this.state.email;
    var password = this.state.password;
    if (!email || !password) {
      alert("Empty field");
    } else {
      var formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      axios
        .post("http://localhost:3000/jiitkontakt/auth/login.php", formData)
        .then((res) => {
          console.log(res);
          if (res.data.auth === true) {
            this.props.history.push("/");
          } else {
            alert("Invalid Credentials");
          }
        });
    }
  }
  render() {
    var email = this.state.email;
    var password = this.state.password;
    return (
      <header className="App-header">
        <div
          className=" shadow-sm p-3 mb-5 bg-body rounded container-sm"
          style={{ maxWidth: "500px" }}
        >
          <img src={logo} alt="" style={{ width: 100 }} />
          <h3>Login</h3>
          <div className="d-flex flex-column">
            <TextField
              id="email"
              label="Email"
              variant="standard"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              error={email === ""}
              helperText={email === "" ? "Empty field!" : " "}
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type="password"
              style={{ marginTop: 30 }}
              value={this.state.password}
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
              error={password === ""}
              helperText={password === "" ? "Empty field!" : " "}
            />
            <SubmitButton
              style={{ marginTop: 20, marginLeft: "25%", marginRight: "25%" }}
              onClick={this.login}
            >
              Login
            </SubmitButton>
            <Link to="/sign-up" style={{ fontSize: 20, margin: 10 }}>
              New Here? SignUp
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Login_Page;
