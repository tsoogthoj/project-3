import React from "react";

function LoginForm({ handleChange, handleFormSubmit }) {
    return (
        <form>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
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
    )
}

export default LoginForm;