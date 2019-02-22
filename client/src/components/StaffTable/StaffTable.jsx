import React, {Component} from 'react';

import "./StaffTable.css";

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            id: this.props.id
        };
    }
    componentDidMount() {
        console.log(this.props.staffList)
    }
    render() {
        let childStaffList = this.props.staffList
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        {childStaffList.map()}
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Pin</th>
                        </tr>
                    </thead>
                    <tbody id="displayStaffInfo">
                            <tr>
                                <td>Chong</td>
                                <td>Thao</td>
                                <td>1111</td>
                            </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary addBtn" data-id="addStaff" >+</button>
            </div>
        )
    }
    
};