import React, { Component } from "react";

import Numpad from "../components/Numpad/numpad"

import "./pin.css";

class Pin extends Component {

clickHandler = (e) => {
    console.log(e.currentTarget.dataset.id )
}

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
            <Numpad click={this.clickHandler}/>
        </div>
    )
}
}

export default Pin;