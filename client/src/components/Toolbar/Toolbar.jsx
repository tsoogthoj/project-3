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

            <div className="toolbar_navigation-items">
                <div onClick={props.displayContent} data-id="staff">Staff</div>
                <div onClick={props.displayContent} data-id="timeSheet">Time Sheets</div>
                <div><a href="/pin">Pin</a></div>
            </div>
        </nav>
    </header>
);

export default toolbar;