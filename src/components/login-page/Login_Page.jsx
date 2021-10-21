import React from 'react'
import logo from '../../assets/klogo.png'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const SubmitButton = styled.button`
  width: 50%;
  padding: 11px 20%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(56, 45, 255);
  background: linear-gradient(
    90deg,
    rgba(56, 45, 255, 1) 0%,
    rgba(67, 67, 255, 1) 11%,
    rgba(0, 212, 255, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;


class Login_Page extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: null,
            password: null,
        }
    }
    render(){
        var email = this.state.email;
        var password = this.state.password;
        return (
            <header className="App-header">
                <div className=" shadow-sm p-3 mb-5 bg-body rounded" style={{width: 500}}>
                    <img src={logo} alt="" style={{width: 100}}/>
                    <h3>Login</h3>
                    <div className="d-flex flex-column"> 
                    <TextField id="email" label="Email" variant="standard" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} error={email === ""} helperText={email === "" ? 'Empty field!' : ' '} />
                    <TextField id="password" label="Password" variant="standard" type="password" style={{marginTop: 30}} value={this.state.password} onChange={event => this.setState({ password: event.target.value })} error={password === ""} helperText={password === "" ? 'Empty field!' : ' '} />
                    
                    </div>   
                    <SubmitButton style={{marginTop: 20}}>Login</SubmitButton>
                </div>
            </header>
        )
    }
    
}

export default Login_Page

