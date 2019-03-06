import React, { Component } from "react"

// modal
import AddStaff from "../addStaff/addstaff"

import "./modal.css"
class Modal extends Component {
    
    render() {
        return (
            <div className={this.props.modalActive ? "modal_wrapper" : ""}>
                {this.props.modalContent === "addStaff" ?
                    (<AddStaff
                        modalActive={this.props.modalActive}
                    />) : null}
            </div>
        )
    }
}

export default Modal