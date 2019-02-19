import React, { Component } from "react";

import Numpad from "../components/Numpad/numpad"
import moment from "moment";

import "./pin.css";

class Pin extends Component {
    state = {
        passcode: [],
        dot1: "dot",
        dot2: "dot",
        dot3: "dot",
        dot4: "dot",
        currentTime: ""
    };
    
    checkPinAuth = () => {
        const time = moment().valueOf();
        console.log(time);
        this.setState({ currentTime: time });
    };

    checkPin = () => {
        if (this.state.passcode.length === 1) {
            this.setState({ dot1: "dot white" });
        } else if (this.state.passcode.length === 2) {
            this.setState({ dot2: "dot white" });
        } else if (this.state.passcode.length === 3) {
            this.setState({ dot3: "dot white" });
        } else if (this.state.passcode.length === 4) {
            this.setState({ dot4: "dot white" });
            this.checkPinAuth();
            setTimeout(() => {
                this.setState({
                    passcode: [],
                    dot1: "dot",
                    dot2: "dot",
                    dot3: "dot",
                    dot4: "dot",
                    currentTime: ""
              });

            }, 500);
        };
    };


    addTo = (e) => {
        let newArray = this.state.passcode;
        newArray.push(e.currentTarget.dataset.id);
        this.setState({ passcode: newArray });
        console.log(this.state.passcode.length);

        this.checkPin();
    };


    render() {
        return (
            <div id="pin">
                <div className="dots">
                    <div className={this.state.dot1}></div>
                    <div className={this.state.dot2}></div>
                    <div className={this.state.dot3}></div>
                    <div className={this.state.dot4}></div>
                </div>
                <br></br>
                <p>Enter Your Pin</p>
                <Numpad click={this.addTo} />
            </div>
        )
    }
}

export default Pin;