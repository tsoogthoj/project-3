import React, { Component } from 'react';

import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/Backdrop/Backdrop";
import "./dashboard.css";

// content
import StaffTable from "../components/StaffTable/StaffTable";
import TimeSheet from "../components/TimeSheet/TimeSheet";
import AddStaff from "../components/StaffTable/addStaff";
import API from "../utils/api";

class Dashboard extends Component {
  state = {
    sideDrawerOpen: false,
    displayContent: "staff",
    firstName: "Chong",
    lastName: "Thao",
    pinNumber: "1123",
    userName: "tsoogthoj",
    password: "tsoogthoj",
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
    this.setState({ displayContent: e.currentTarget.dataset.id })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleFormSubmit = event => {
    event.preventDefault();
    API.saveUsers({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      pinNumber: this.state.pinNumber,
      userName: this.state.userName,
      password: this.state.password,
    }, this.setState({ displayContent: "staff"}, console.log("added Staff")))
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
          {active === 'staff' ? (
            <StaffTable
              displayContent={this.displayContent}
              staffList={this.state}
            />
          ) : active === "timeSheet" ? (
            <TimeSheet />
          ) : active === "addStaff" ? (
            <AddStaff
              handleChange={this.handleChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Dashboard;
