import React from "react";
import "./Login.css";
import Navbar from "./Navbar";

const Login = () => {
    return (
        <>
        <Navbar/>
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <button>Log In</button>
                <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
        </>
    );
}

export default Login;
