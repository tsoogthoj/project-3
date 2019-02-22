import React from "react";
import StaffInfo from "./StaffInfo"


import "./StaffTable.css";

const StaffTable = (props) => (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Pin</th>
                </tr>
            </thead>
            <tbody id="displayStaffInfo">
                <StaffInfo />
            </tbody>
        </table>
        <button type="button" className="btn btn-primary addBtn" onClick={props.displayContent} data-id="addStaff" >+</button>
    </div>
);

export default StaffTable;