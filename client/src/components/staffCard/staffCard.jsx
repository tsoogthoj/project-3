import React, { Component } from "react"

import "./staffCard.css"

class StaffCard extends Component {

    render() {
        return (
            <div className="staffCardWrapper" >
                <div className="staffCard_card card">
                    <img className="card-img-top" src="" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card Body</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffCard