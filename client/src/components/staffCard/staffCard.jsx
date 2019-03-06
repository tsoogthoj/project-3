import React, { Component } from "react"


import API from "../../utils/api"
import "./staffCard.css"

class StaffCard extends Component {
    state = {
        staff: []
    }
    componentDidMount() {
        API.getStaff().then(res => {
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
                        <img className="card-img-top" src="" alt="" />
                        <div className="card-body">
                            <h6 className="card-title">{item.first_name} {item.last_name} </h6>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default StaffCard