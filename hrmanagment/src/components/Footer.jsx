import { Link } from "react-router-dom";
import "./footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="hr-footer">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-12 col-md-6 col-lg-5">
                        <Link className="hr-footer-brand" to="/">
                            <span className="hr-footer-brand-icon" aria-hidden="true">✦</span>
                            HR Management
                        </Link>
                        <p className="hr-footer-description">
                            A centralized platform for supporting people and managing essential HR services.
                        </p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <h2 className="hr-footer-heading">Quick Links</h2>
                        <ul className="hr-footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <h2 className="hr-footer-heading">Contact Information</h2>
                        <p className="hr-footer-contact">
                            For questions or assistance, get in touch with our team.
                        </p>
                        <Link className="hr-footer-contact-link" to="/contact">
                            Visit our Contact page <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                <div className="hr-footer-bottom">
                    <p>© {currentYear} HR Management. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
