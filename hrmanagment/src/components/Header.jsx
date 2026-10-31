
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar" aria-label="Main navigation">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <span className="brand-icon" aria-hidden="true">✦</span> HR Management
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <div className="navbar-nav ms-auto align-items-lg-center">
                        <NavLink className="nav-link" to="/" end>
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                        <NavLink className="nav-link" to="/register">
                            Register
                        </NavLink>
                        <NavLink className="nav-link login-btn" to="/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
