import React, { Component } from "react";

import Numpad from "../components/numpad/numpad"

import moment from "moment";
import StaffAPI from "../utils/staff-api"
import TimeAPI from "../utils/time-api"

import correct from "./pinAudio/correct.mp3"
import wrong from "./pinAudio/wrong.mp3"
import double from "./pinAudio/double.mp3"

import "./pin.css";

class Pin extends Component {
    state = {
        width: 0,
        height: 0,
        staffsPin: [],
        passcode: [],
        correct: "",
        dot1: "dot",
        dot2: "dot",
        dot3: "dot",
        dot4: "dot",
        punchedTime: ""
    };

    componentDidMount = () => {
        this.updateStaffsPin()
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }


    updateStaffsPin = () => {
        StaffAPI.getStaff().then(res => {
            let staffsPin = []
            for (let i = 0; i < res.data.length; i++) {
                staffsPin.push(res.data[i].pin)
            }
            this.setState({staffsPin: staffsPin})
        })
    }

    checkPinAuth = () => {
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
            const time = moment().valueOf()
            
            TimeAPI.getTimePin(passcode).then(res => {
                const lastPunched = res.data[res.data.length - 1].time
                if ((time - lastPunched) < 60000) {
                    let doubleSound = new Audio(double)
                    doubleSound.loop = false
                    doubleSound.play()
                    this.setState({correct: "double"})
                    setTimeout(() => {
                        this.setState({correct: ""})
                    },500)
                } else {
                    let correctSound = new Audio(correct)
                    correctSound.loop = false
                    correctSound.play()
                    this.setState({correct: "correct"})
                    setTimeout(() => {
                        this.setState({correct: ""})
                    },500)
                    TimeAPI.saveTime({
                        staffPin: passcode,
                        time: time
                    })
                }
            })
        } else {
            let wrongSound = new Audio(wrong)
            wrongSound.loop = false
            wrongSound.play()
            this.setState({correct: "wrong"})
            setTimeout(() => {
				this.setState({correct: ""})
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
                    dot4: "dot"
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
        let height = this.state.height * .95
        let width = this.state.height * .53
        return (
            <div className={"pinContainer "
            + (this.state.correct === "correct" ? "correct" : "")
            + (this.state.correct === "double" ? "double" : "")
            + (this.state.correct === "wrong" ? "wrong" : "")
            }>
                <div id="pin" style={{
                    height: height,
                    width:  width
                    }}>
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