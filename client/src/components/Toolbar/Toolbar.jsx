import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toobar.css"

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/dashboard">Employee Time Management</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li onClick={props.displayContent} data-id="staff">Staff</li>
                    <li onClick={props.displayContent} data-id="timeSheet">Time Sheets</li>
                    <li><a href="/pin">Pin</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;