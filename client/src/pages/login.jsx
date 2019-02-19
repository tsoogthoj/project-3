import React, { Component } from "react";

import "./login.css";

class Login extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="formContent">
                    <form>
                        <input type="email" id="login" name="login" placeholder="Email" />
                        <input type="password" id="password" name="login" placeholder="Password" />
                        <input type="submit" value="Log In" />
                    </form>
                    <div id="formFooter">
                        <a class="underlineHover" href="/">Forgot Password?</a>

                    </div> 
                </div>
            </div>
        )
    }
};

export default Login;