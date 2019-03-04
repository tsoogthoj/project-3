import React, { Component } from "react";

import "./sidebar.css"

class Sidebar extends Component {

    render() {

        return (
            <header className="sidebar_wrapper">
                <div className="sidebar_content">
                    <div className={this.props.active === "home" ? "sidebar_content_item sidebar_active" : "sidebar_content_item"} onClick={this.props.displayContent} data-id="home">
                        Home
                    </div>
                    <div className={this.props.active === "staff" ? "sidebar_content_item sidebar_active" : "sidebar_content_item"} onClick={this.props.displayContent} data-id="staff">
                        Staff
                    </div>
                    <div className={this.props.active === "timeSheet" ? "sidebar_content_item sidebar_active" : "sidebar_content_item"} onClick={this.props.displayContent} data-id="timeSheet">
                        Time Sheets
                    </div>
                    <a className="sidebar_content_item" href="/pin" target="_blank">Time Clock</a>
                </div>
            </header>
        )
    }
}

export default Sidebar;