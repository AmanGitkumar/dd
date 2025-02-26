import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className='left'>
                <li>
                    <ul>Dashboard</ul>
                    <ul>Incomes</ul>
                    <ul>Expenses</ul>
                    <input className='search' type="text" placeholder="Search your transaction:)"/>
                </li>
            </div>
            <div className='right'>
                <li>
                    <ul>Go to</ul>
                    <Link to="/login" className="login">Log in</Link>
                    <Link to="/signup" className="signup">Sign Up</Link>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;
