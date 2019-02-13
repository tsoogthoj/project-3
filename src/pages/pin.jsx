import React, { Component } from "react";

import Numpad from "../components/Numpad/numpad"

import "./pin.css";

class Pin extends Component {
    state = {
        passcode: []
    };

    addTo = (e) => {
        let newArray = this.state.passcode;
        newArray.push(e.currentTarget.dataset.id)
        this.setState( {passcode: newArray})
        console.log(this.state.passcode)
    };

    render() {
        return (
            <div id="pin">
                <div className="dots">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                    <div className="dot dot4"></div>
                </div>
                <br></br>
                <p>Enter Your Pin</p>
                <Numpad click={this.addTo} />
            </div>
        )
    }
}

export default Pin;