import React, { Component } from "react"

class StaffCard extends Component {

    render() {
        return (
            <div className="staffCardWrapper" >
                <div className="card">
                    <img className="card-img-top" src="" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card Body</h5>
                        <a href="#" className="btn btn-primary">More Info</a>
                    </div>
                </div>
            </div>
        )
    }
}