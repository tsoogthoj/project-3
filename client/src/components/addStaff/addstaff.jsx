import React, { Component } from "react";


import "./addstaff.css"
import API from "../../utils/api"

class AddStaff extends Component {
    state = {
        firstName: "",
        lastName: "",
        pinNumber: "",
        password: "",
        jobTitle: "Admin",
        address: "",
        city: "",
        inputState: "",
        zipCode: ""
    }

    addStaffToDatabase = () => {
        API.saveStaff({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            street_address: this.state.address,
            city: this.state.city,
            state: this.state.inputState,
            zip_code: this.state.zipCode,
            password: this.state.password,
            pin: this.state.pinNumber,
            title: this.state.jobTitle
        })
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    render() {
        return (
            <div className="addStaff_wrapper">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label htmlFor="pinNumber">Pin</label>
                            <input type="number" className="form-control" id="pinNumber" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="jobTitle">Title</label>
                            <select className="form-control" id="jobTitle" onChange={this.handleChange}>
                                <option>Admin</option>
                                <option>Staff</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" onChange={this.handleChange}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="zipCode">Zip</label>
                            <input type="text" className="form-control" id="zipCode" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="btn btn-primary addStaffBtn" onClick={this.addStaffToDatabase}>Add Staff</button>
                        <button className="btn btn-danger cancelBtn" onClick={this.cancel}>Cancel</button>
                    </div>
                </form>
            </div >
        )
    }
};

export default AddStaff;