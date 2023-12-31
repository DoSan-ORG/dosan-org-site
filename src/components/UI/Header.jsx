import { useDispatch } from 'react-redux';
import { themeActions } from '../../store/theme';
import { NavLink } from 'react-router-dom';

function Header(){
    const theme = localStorage.getItem('theme');
    const dispatch = useDispatch();

    const onSwitchThemeHandler = () => {
        let newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(themeActions.switchTheme(newTheme));
    }

    return (
        <header className={`header navbar navbar-expand-lg position-absolute navbar-sticky ${theme === 'dark' ? 'navbar-dark' : ''}`}>
            <div className="container px-3">
                <NavLink to="/home" className="navbar-brand pe-3">
                    <img src="/logo.png" width="100" alt="DosanOrg" />
                </NavLink>
                <div id="navbarNav" className={`offcanvas offcanvas-end ${theme === 'dark' ? 'bg-dark': ''}`}>
                    <div className="offcanvas-header border-bottom">
                        <h5 className={`offcanvas-title text-${theme === 'dark' ? 'white': 'dark'}`}>Menu</h5>
                        <button type="button" className={`btn-close btn-close-${theme === 'dark' ? 'white': 'dark'}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
                                <NavLink to="/home" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
                                <NavLink to="/about" className="nav-link">About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
                                <NavLink to="/services" className="nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`pe-lg-1 ms-auto me-4`}>
                    <div className="form-check form-switch mode-switch" data-bs-toggle="mode" >
                        <input type="checkbox" className="form-check-input" id="theme-mode" 
                            style={{cursor: 'pointer'}} 
                            onClick={onSwitchThemeHandler} 
                            defaultChecked={ theme === 'dark' ? true : false } />
                        <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Light</label>
                        <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Dark</label>
                    </div>
                </div>

                <button 
                    type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;