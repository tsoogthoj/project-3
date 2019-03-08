import React, { Component } from "react";

class Numpad extends Component {
    render() {
        return (
            <div className="numbers">
                <div className="number" data-id="1" onClick={this.props.click}>1</div>
                <div className="number" data-id="2" onClick={this.props.click}>2</div>
                <div className="number" data-id="3" onClick={this.props.click}>3</div>
                <div className="number" data-id="4" onClick={this.props.click}>4</div>
                <div className="number" data-id="5" onClick={this.props.click}>5</div>
                <div className="number" data-id="6" onClick={this.props.click}>6</div>
                <div className="number" data-id="7" onClick={this.props.click}>7</div>
                <div className="number" data-id="8" onClick={this.props.click}>8</div>
                <div className="number" data-id="9" onClick={this.props.click}>9</div>
            </div>
        )
    }
}

export default Numpad;