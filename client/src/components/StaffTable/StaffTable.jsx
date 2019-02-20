import React from "react";
import StaffInfo from "./StaffInfo"


import "./StaffTable.css";

const StaffTable = () => (
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
);

export default StaffTable;