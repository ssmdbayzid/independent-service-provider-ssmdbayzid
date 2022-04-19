import React from 'react';
import logo from '../images/logo copy.png'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {
    return (
        <div >
            <div className='nav-bar d-flex align-items-center justify-content-center'>
            <div style={{marginRight: '300px'}}>
            <a className='d-flex align-items-center' href="/home">
            <img src={logo} style={{width: '50px', height: '50px'}} alt="" srcset="" />
            <h5>Destinee Photography</h5>
            </a>
            </div>
            <Nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/log-in'}>Log In</Link>
                <Link to={'/register'}>Register</Link>
            </Nav>
            </div>
        </div>
    );
};

export default Header;