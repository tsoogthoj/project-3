import React, { Component } from "react";

import "./sidebar.css"

class Sidebar extends Component {

    render() {

        return (
            <header className="sidebar_wrapper">
                <div className="sidebar_content">
                    <div className="sidebar_content_item home" onClick={this.props.displayContent} data-id="home">
                        Home
                    </div>
                    <div className="sidebar_content_item staff" onClick={this.props.displayContent} data-id="staff">
                        Staff
                    </div>
                    <div className="sidebar_content_item time_sheets" onClick={this.props.displayContent} data-id="timeSheet">
                        Time Sheets
                    </div>
                    <div className="sidebar_content_item pin" ><a href="/pin">Pin</a></div>
                </div>
            </header>
        )
    }
}

export default Sidebar;