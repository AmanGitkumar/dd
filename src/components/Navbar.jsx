import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2 className="logo">FinanceTracker</h2>
                <ul className="nav-links">
                    
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/incomes">Incomes</Link></li>
                    <li><Link to="/expenses">Expenses</Link></li>
                </ul>
                {/* <input className="search" type="text" placeholder="Search transactions..." /> */}
            </div>
            
        </nav>
    );
}

export default Navbar;
