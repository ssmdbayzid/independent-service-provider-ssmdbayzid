import React from 'react';
import logo from '../images/logo copy.png'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './Header.css'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
            signOut(auth)
    }
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
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/about'}>About Me</Link>
                <Link to={'blog'}>Blogs</Link>
                {
                    user? <button onClick={handleSignOut}>Sign Out</button>: <Link to={'/log-in'}>Log In</Link>

                }
                
                {
                user? '' : <Link to={'/register'}>Register</Link>
                
                }
            </Nav>
            </div>
        </div>
    );
};

export default Header;