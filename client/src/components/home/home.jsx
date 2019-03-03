import React, { Component } from "react"

import StaffCard from "../staffCard/staffCard"

import "./home.css"

class Home extends Component {
    
    render() {
        return (
            <div className="home_wrapper">
                <div className="home_section home_clocked">
                    <div className="home_clockedIn home_section_child">
                        <div className="home_header">Clocked In</div>
                        <div className="home_body">
                            <StaffCard />
                        </div>
                    </div>
                    <div className="home_clockedOut home_section_child">
                        <div className="home_header">Clocked Out</div>
                        <div className="home_body">
                           
                        </div>
                    </div>
                </div>
                <div className="home_section home_present home_section_child">
                    <div className="home_header">Absent</div>
                    <div className="home_body">
                            
                        </div>
                </div>
            </div>
        )
    }
}

export default Home