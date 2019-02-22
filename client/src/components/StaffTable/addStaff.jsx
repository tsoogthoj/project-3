import React from "react";

import "./addStaff.css";

const AddStaff = ({handleChange, handleFormSubmit}) => (
    <form className="wrapper">
        <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required />
        <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required />
        <input
            type="text"
            id="pinNumber"
            name="pin"
            placeholder="Pin"
            pattern="\d*"
            maxLength="4"
            onChange={handleChange}
            required />
        <input
            type="text"
            id="userName"
            name="userName"
            placeholder="User Name"
            onChange={handleChange}
            required />
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required />
        <input
            type="submit"
            value="Log In"
            onClick={handleFormSubmit} />
    </form>
);

export default AddStaff;