import React, { Component } from 'react';

import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/Backdrop/Backdrop";
import "./dashboard.css";

// content
import StaffTable from "../components/StaffTable/StaffTable";
import TimeSheet from "../components/TimeSheet/TimeSheet"

class Dashboard extends Component {
  state = {
    sideDrawerOpen: false,
    displayContent: "timeSheet",
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropCLickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  displayContent = (e) => {
    this.setState({ displayContent: e.currentTarget.dataset.id})
  }

  render() {
    let backdrop;
    let active = this.state.displayContent;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropCLickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          displayContent={this.displayContent}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="contentContainer">
          {active === 'products' ? (
            <StaffTable />
          ) : active === "timeSheet" ? (
            <TimeSheet />
          ): null}
        </div>
      </div>
    );
  }
}

export default Dashboard;
