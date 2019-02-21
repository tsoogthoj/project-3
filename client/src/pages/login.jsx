import React, { Component } from "react";
import LoginForm from "../components/loginForm/loginForm"

import "./login.css";

class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }


      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)
      }

    render() {
        return (
            <div className="wrapper">
                <div className="formContent">
                    <LoginForm 
                    handleChange={this.handleChange}
                    handleFormSubmit={this.handleFormSubmit} 
                    />
                </div>
            </div>
        )
    }
};

export default Login;