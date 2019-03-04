import React, { Component } from 'react';

import "./dashboard.css";


// content
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import Staff from "../components/staff/staff";
import TimeSheet from "../components/TimeSheet/TimeSheet";
// import AddStaff from "../components/StaffTable/addStaff";
import Home from "../components/home/home"
import AddStaff from "../components/addStaff/addstaff"

import API from "../utils/api";

class Dashboard extends Component {
  state = {
    modalActive: false,
    displayContent: "staff",
    first_name: "",
    last_name: "",
    pinNumber: "",
    password: ""
  };

  displayContent = (e) => {
    this.setState({ displayContent: e.currentTarget.dataset.id })
  }

  modalActive = () => {
    if (this.state.modalActive) {
      this.setState({ modalActive: false })
    } else {
      this.setState({ modalActive: true })
    }

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
      <div className="dashboard_wrapper">
        <div className="modalActive">
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
                <Staff
                  modalActive={this.modalActive}
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
