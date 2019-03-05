import React, { Component } from "react";

import "./addstaff.css"

class AddStaff extends Component {

    render() {
        return (
            <div className="addStaff_wrapper">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputFirstName">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputLastName">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label for="pinNumber">Pin</label>
                            <input type="number" className="form-control" id="pinNumber" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="jobTitle">Title</label>
                            <select class="form-control" id="jobTitle">
                                <option>Admin</option>
                                <option>Staff</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="btn btn-primary addStaffBtn">Add Staff</button>
                        <button className="btn btn-danger cancelBtn">Cancel</button>
                    </div>
                </form>
            </div >
        )
    }
};

export default AddStaff;