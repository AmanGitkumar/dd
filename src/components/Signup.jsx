import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Create a password" />
                <input type="password" placeholder="Confirm password" />
                <button>Sign Up</button>
                <p className="login-link">Already have an account? <a href="/login">Log In</a></p>
            </div>
        </div>
    );
}

export default Signup;
