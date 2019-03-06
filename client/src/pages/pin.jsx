import React, { Component } from "react";

import Numpad from "../components/Numpad/numpad"

import moment from "moment";
import API from "../utils/api"

import correct from "./pinAudio/correct.mp3"
import wrong from "./pinAudio/wrong.mp3"

import "./pin.css";

class Pin extends Component {
    state = {
        staffsPin: [],
        passcode: [],
        correct: 0,
        dot1: "dot",
        dot2: "dot",
        dot3: "dot",
        dot4: "dot",
        punchedTime: ""
    };

    componentDidMount() {
        this.updateStaffsPin()
    }

    updateStaffsPin = () => {
        API.getStaff().then(res => {
            let staffsPin = []
            for (let i = 0; i < res.data.length; i++) {
                staffsPin.push(res.data[i].pin)
            }
            this.setState({staffsPin: staffsPin})
        })
    }

    checkPinAuth = () => {
        console.log(this.state.staffsPin)
        let passcode = this.state.passcode
        passcode = passcode.join("")
        let found = false
        for (let i = 0; i < this.state.staffsPin.length; i++) {
            // eslint-disable-next-line
            if (passcode == this.state.staffsPin[i]) {
                found = true
                break
            }
        }

        if (found) {
            let correctSound = new Audio(correct)
            correctSound.loop = false
            correctSound.play()
            this.setState({correct: true})
            setTimeout(() => {
				this.setState({correct: 0})
			},500)
            // eslint-disable-next-line
            const time = moment().valueOf();

        } else {
            let wrongSound = new Audio(wrong)
            wrongSound.loop = false
            wrongSound.play()
            this.setState({correct: false})
            setTimeout(() => {
				this.setState({correct: 0})
			},500)
        }

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
        this.checkPin();
    };


    render() {
        return (
            <div className={"pinContainer "
            + (this.state.correct ? "correct" : "")
            + (this.state.correct === false ? "wrong" : "")
            }>
                <div id="pin">
                    <div className="dots">
                        <div className={this.state.dot1}></div>
                        <div className={this.state.dot2}></div>
                        <div className={this.state.dot3}></div>
                        <div className={this.state.dot4}></div>
                    </div>
                    <br></br>
                    <p className="pinTitle">Enter Your Pin</p>
                    <Numpad
                        click={this.addTo}
                        parentState={this.state}
                    />
                </div>
            </div>
        )
    }
}

export default Pin;