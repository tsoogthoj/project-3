import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toobar.css"

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">Employee Time Management</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;