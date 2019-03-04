import React, { Component } from "react"

import "./staff.css"

class Staff extends Component {
    render() {
        return (
            <div className="staff_wrapper">
            <div className="staff_addStaff_row">
                <div className="staff_addStaff btn btn-primary" onClick={this.props.modalActive}>
                    + Add Staff
                </div>
            </div>
            </div>
        )
    }
}

export default Staff