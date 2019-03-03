import React, { Component } from "react";
import moment from "moment"

import "./header.css"

class Header extends Component {

    render() {
        let currentDate = moment().format("LL")
        return (
            <nav className="header_wrapper">
                <div className="toolbar_logo"><strong>Employee Time Management</strong></div>
                <div className="date"><strong>{currentDate}</strong></div>
            </nav>
        )
    }
};

export default Header;