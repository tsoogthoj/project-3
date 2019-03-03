import React, { Component } from 'react';

import "./dashboard.css";


// content
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import StaffTable from "../components/StaffTable/StaffTable";
import TimeSheet from "../components/TimeSheet/TimeSheet";
import AddStaff from "../components/StaffTable/addStaff";
import Home from "../components/home/home"

import API from "../utils/api";

class Dashboard extends Component {
  state = {
    sideDrawerOpen: false,
    displayContent: "home",
    first_name: "",
    last_name: "",
    pinNumber: "",
    password: ""
  };

  displayContent = (e) => {
    this.setState({ displayContent: e.currentTarget.dataset.id })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropCLickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    }, console.log(this.state));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveUsers({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      pin: this.state.pinNumber,
      password: this.state.password,
    }, this.setState({ displayContent: "staff" }, console.log("added Staff")))
  }

  render() {
    let active = this.state.displayContent

    return (
      <div className="dashboard">
        <div className="dashboard_nav">
          <Header />
        </div>
        <div className="dashboard_content">
          <div className="dashboard_sidebar">
            <Sidebar 
            displayContent={this.displayContent} 
            active={this.state.displayContent}
            />
          </div>
          <div className="dashboard_displayContent">
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
          ) : active === "home" ? (
            <Home />
          ): null}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
