import React, { Component } from "react"

// modal
import AddStaff from "../addStaff/addstaff"

import "./modal.css"
class Modal extends Component {
    render() {
        return (

            <div className="modal_wrapper">
                {this.props.modalContent === "addStaff" ? (<AddStaff />) : null}
            </div>
        )
    }
}

export default Modal