import React, { Component } from 'react';

import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/Backdrop/Backdrop";
import ContentContainer from "../components/ContentContainer/ContentContainer";

class Dashboard extends Component {
  state = {
    sideDrawerOpen: false,
    displayContent: ""
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropCLickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  displayContent = () => {

  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropCLickHandler} />;
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar 
        drawerClickHandler={this.drawerToggleClickHandler} 
        displayContent={this.displayContent}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <ContentContainer />
      </div>
    );
  }
}

export default Dashboard;
