import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {
    return (
        <div>
            <div className='nav-bar'>        
            <Nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/log-in'}>Log In</Link>
                <Link to={'/log-out'}>Log Out</Link>
            </Nav>
            </div>
        </div>
    );
};

export default Header;