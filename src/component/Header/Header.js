import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './Header.css'

const Header = () => {
    return (
        <div>
            <div className='nav-bar'>
            
            <Nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/albam'}>Albam</Link>
                <Link to={'/images'}>Images</Link>
                <Link to={'/contact'}>Contact</Link>
            </Nav>

            </div>
        </div>
    );
};

export default Header;