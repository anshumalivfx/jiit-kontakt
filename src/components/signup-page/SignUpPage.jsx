import React, { Component } from 'react'
import logo from '../../assets/klogo.png'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import avatar from '../../assets/avatar.jpg'

import { SubmitButton } from '../common/styled-components';

const ProfPic = styled.img`
    &:hover {
        -moz-box-shadow: 0 0 5px 5px #ff7979;
        -webkit-box-shadow: 0 0 5px 5px #29b0ff;
        box-shadow: 0 0 5px 5px #0057fa;
    };
`

export default class SignUpPage extends Component {
    constructor(props) {
        super();
        this.state = {
            email: null,
            password: null,
            firstname: null,
            lastname: null,
            profilepicture: avatar
        }
    }
    render(){
        var email = this.state.email;
        var password = this.state.password;
        var firstname = this.state.firstname;
        var lastname = this.state.lastname;
        var name = firstname + ' ' + lastname;
        function inputToURL(inputElement) {
            var file = inputElement.files[0];
            return window.URL.createObjectURL(file);
        }
        return (
            <header className="App-header">
                <div className=" shadow-sm p-3 mb-5 bg-body rounded container-sm" style={{maxWidth: '500px'}} >
        

                    <ProfPic src={logo} alt="" style={{width: 100}}/>
                

                    <h3>SignUp</h3>
                    
                    {/* <img src={this.state.profilepicture} alt="" style={{width: 200, height: 200}} className="rounded-circle"/> */}
                    <div class="image-upload">
                    <label for="file-input">
                        <img src={this.state.profilepicture} alt="" style={{width: 200, height: 200, hover: {background: ''}}} className="rounded-circle"/>
                    </label>

                    <input id="file-input" type="file" style={{display: 'none'}} onChange={event=>{this.setState({profilepicture: inputToURL(document.getElementById('file-input'))})}} />
                    </div>
                    {/* <input type="image" src={this.state.profilepicture} alt="Submit Form" className="rounded-circle" /> */}
                    <div className="d-flex flex-column"> 
                    <TextField id="firstname" label="First Name" variant="standard" value={this.state.firstname} onChange={event => this.setState({ firstname: event.target.value })} error={this.state.firstname === ""} helperText={this.state.firstname === "" ? 'Empty field!' : ' '} />
                    <TextField id="lastname" label="Last Name" variant="standard" value={this.state.lastname} onChange={event => this.setState({ lastname: event.target.value })} error={this.state.lastname === ""} helperText={this.state.lastname === "" ? 'Empty field!' : ' '} />
                    <TextField id="email" label="Email" variant="standard" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} error={email === ""} helperText={email === "" ? 'Empty field!' : ' '} />
                    <TextField id="password" label="Password" variant="standard" type="password" style={{marginTop: 10}} value={this.state.password} onChange={event => this.setState({ password: event.target.value })} error={password === ""} helperText={password === "" ? 'Empty field!' : ' '} />
                    <SubmitButton className="w-50" style={{marginTop: 20, marginLeft: "25%", marginRight: "25%"}}>SignUp</SubmitButton>
                    <Link to="/login" style={{fontSize: 20, margin: 10}}>Already have an account? Login</Link>
                    </div>   
                    
                </div>
            </header>
        )
    }
}
