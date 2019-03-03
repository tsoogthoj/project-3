import React from "react";

import "./addStaff.css";

const AddStaff = ({handleChange, handleFormSubmit}) => (
    <form className="wrapper form-group">
        <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            required />
        <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            required />
        <input
            type="text"
            id="pinNumber"
            name="pinNumber"
            placeholder="Pin"
            pattern="\d*"
            maxLength="4"
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