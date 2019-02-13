import React from "react";


const numpad = props => {
    return (
        <div className="numbers">
            <div className="row">
                <div className="number" data-id="1" onClick={props.click}>1</div>
                <div className="number" data-id="2" onClick={props.click}>2</div>
                <div className="number" data-id="3" onClick={props.click}>3</div>
            </div>
            <div className="row">
                <div className="number" data-id="4" onClick={props.click}>4</div>
                <div className="number" data-id="5" onClick={props.click}>5</div>
                <div className="number" data-id="6" onClick={props.click}>6</div>
            </div>
            <div className="row">
                <div className="number" data-id="7" onClick={props.click}>7</div>
                <div className="number" data-id="8" onClick={props.click}>8</div>
                <div className="number" data-id="9" onClick={props.click}>9</div>
            </div>
        </div>
    )
}

export default numpad;