import React, { Component } from 'react';

import "./dashboard.css";


// content
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import Staff from "../components/staff/staff";
import TimeSheet from "../components/TimeSheet/TimeSheet";
import Home from "../components/home/home"
import Modal from "../components/modal/modal"





import API from "../utils/api";

class Dashboard extends Component {
  state = {
    modalActive: false,
    modalContent: "",
    displayContent: "staff",
    first_name: "",
    last_name: "",
    pinNumber: "",
    password: ""
  };

  displayContent = (e) => {
    this.setState({ displayContent: e.currentTarget.dataset.id })
  }

  modalActive = (event) => {
    if (this.state.modalActive) {
      this.setState({ modalActive: false })
    } else {
      this.setState({ modalActive: true })
    }
    this.setState({modalContent: event.currentTarget.dataset.id}) 
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

              <div className={this.state.modalActive ? "modalActive" : ""} />
              {active === 'staff' ? (
                <Staff
                  modalActive={this.modalActive}
                />
              ) : active === "timeSheet" ? (
                <TimeSheet />
              ) : active === "home" ? (
                <Home />
              ) : null}

              <div className="modalContent">
                <Modal 
                  modalContent = {this.state.modalContent}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Dashboard;
