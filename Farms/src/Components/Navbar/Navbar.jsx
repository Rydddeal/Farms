import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assests/vitelogo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '80px' }}>
            <div className="container-fluid">
                <div className='logo-container' style={{marginRight: '300px'}}>
                    <img src={logo} alt="Company logo" style={{ width: '45px', height: '6vh', borderRadius: '40%', marginRight: '10px' }} />
                     <a className="navbar-brand" href="#">Farms</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto" style={{ padding: '5px 0', fontSize: '20px' }}>
                        <li className="nav-item" style={{marginRight: '50px' }}>
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item" style={{marginRight: '50px' }}>
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item" style={{marginRight: '50px' }}>
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item" style={{marginRight: '50px' }}>
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav" style={{marginRight: '30px' }}>
                        <li className="nav-item" style={{marginRight: '30px' }}>
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faSearch} /></a>
                        </li>
                        <li className="nav-item" style={{marginRight: '30px' }}>
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>
                        <li className="nav-item" style={{marginRight: '30px' }}>
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faBars} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
