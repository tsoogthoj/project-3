import React, { Component } from "react"


import StaffAPI from "../../utils/staff-api"

import "./staffCard.css"
import noPhoto from "./Nophoto.jpg"
class StaffCard extends Component {
    state = {
        staff: []
    }
    componentDidMount() {
        StaffAPI.getStaff().then(res => {
            this.setState({ staff: res.data })
        })
    }

    renderStaff = () => {

    }

    render() {
        const data = this.state.staff

        return (
            <div className="staffCardWrapper">
                {data.map(item => (
                    <div className="staffCard_card" key={item.id}>
                        <img className="card-img-top" src={noPhoto} alt="" />
                        <div className="card-body">
                            <h6 className="card-title">{item.first_name} {item.last_name}</h6>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default StaffCard