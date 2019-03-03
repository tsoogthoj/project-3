import React, { Component } from "react"

import "./home.css"
class Home extends Component {
    
    render() {
        return (
            <div className="home_wrapper">
                <div className="home_section home_clocked">
                    <div className="home_clockedIn home_section_child">
                        <div className="home_header"></div>
                        clocked in
                    </div>
                    <div className="home_clockedOut home_section_child">
                        <div className="home_header"></div>
                        Clocked out
                    </div>
                </div>
                <div className="home_section home_present home_section_child">
                    <div className="home_header"></div>
                    absent
                </div>
            </div>
        )
    }
}

export default Home