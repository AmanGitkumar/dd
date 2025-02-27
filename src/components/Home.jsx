import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="homeright">
          <h1 className="home-title">Finance Tracker</h1>
          <p className="home-description">
            Take control of your finances! Manage your Dashboard, Incomes, and Expenses efficiently.
          </p>
      <div className="navbar-right">
        <ul className="auth-links">
          <li><Link to="/login" className="login-btn">Log in</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign up</Link></li>
        </ul>
      </div>
        </div>
        <img 
          className="homep" 
          src="photo1.png" 
          alt="Finance Tracker Logo" 
        />
      </div>

      {/* Navigation Buttons */}
    </div>
  );
};

export default Home;
