import { NavLink } from 'react-router-dom';

function Footer() {
    const theme = localStorage.getItem('theme');
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`footer position-relative pt-5 pb-4 pb-lg-5 ${theme === 'dark' ? 'bg-dark': ''}`}>
            <span className={`position-absolute top-0 start-0 d-none w-100 h-100 bg-secondary opacity-75`}></span>
            <div className={`position-relative container pt-lg-4 ${theme === 'dark' ? 'dark-mode': ''}`}>
                <div className="row pb-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
                            DosanOrg
                        </div>
                        <p className={`fs-sm opacity-70 pb-lg-3 mb-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                            Welcome to DosanOrg, your destination for innovative software solutions. We develop customized, scalable software 
                            that transforms businesses. Our services include software development, application integration, cloud solutions, data analytics, and cybersecurity.
                            Partner with us to unlock your digital potential and thrive in the modern era.
                        </p>
                        <form className="needs-validation" noValidate>
                            <label htmlFor="subscr-email" className="form-label">Subscribe to our newsletter</label>
                            <div className="input-group">
                                <input type="email" id="subscr-email" className="form-control rounded-start ps-5" placeholder="Your email"
                                    required />
                                <i
                                    className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
                                <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.</div>
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
                        <div id="footer-links" className="row">
                            <div className="col-lg-4">
                                <h6 className="mb-2">
                                    <a href="#useful-links" className="d-block text-dark dropdown-toggle d-lg-none py-2"
                                        data-bs-toggle="collapse">Useful Links</a>
                                </h6>
                                <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                                    <ul className="nav flex-column pb-lg-1 mb-lg-3">
                                        <li className="nav-item"><NavLink to="/home" className="nav-link">Home</NavLink></li>
                                        <li className="nav-item"><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                                        <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
                                        <li className="nav-item"><NavLink to="/contact-us" className="nav-link">Contact Us</NavLink></li>
                                    </ul>
                                    <ul className="nav flex-column mb-2 mb-lg-0">
                                        <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Terms &amp;
                                            Conditions</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3">
                                <h6 className="mb-2">
                                    <a href="#social-links" className="d-block text-dark dropdown-toggle d-lg-none py-2"
                                        data-bs-toggle="collapse">Socials</a>
                                </h6>
                                <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                                    <ul className="nav flex-column mb-2 mb-lg-0">
                                        <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>
                                        <li className="nav-item"><a href="https://www.linkedin.com/company/dosan-org-technology/" className="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Twitter</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                                <h6 className="mb-2">Contact Us</h6>
                                <a href="mailto:email@example.com" className="fw-medium">dosanorg@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
                    <span className={`opacity-50 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>&copy; All rights reserved {currentYear}</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;