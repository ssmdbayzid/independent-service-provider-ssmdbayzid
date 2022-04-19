import React, { useState } from 'react';
import img from '../images/google signin.png'
import './LogIn.css'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom';
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const LogIn = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);
      const [sendEmailVerification] = useSendEmailVerification(auth);



        const resetPassword = () =>{
            sendPasswordResetEmail(email)
        }
    //   ========Send Email Verify


    const handleGoogleSignIn = () =>{
        signInWithGoogle();
    }
    if(user){
        navigate('/home')
        console.log(user)
    }


    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    };
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
    };



    const handleUserLoginSubmit = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div>
            <div className="log-in mt-5">
                <h2>Log In</h2>
                <form onSubmit={handleUserLoginSubmit} className="form">
                    <input onBlur={handleEmailBlur} type="email" placeholder="Your Email " required />  <br></br>
                    <input onBlur={handlePasswordBlur} type="password" placeholder="Your Password " required />
                    <p>{error?.message}</p>
                    <p>
                        New In Here? <Link className='form-link' to="/register" style={{ color: '#EE831F', fontWeight: '700' }}>Register </Link>
                    </p>

                    <input onClick={() => {
                    sendEmailVerification(); 
                    alert('Sent email');}} className="login-btn" type="submit" value="Log In" />
                    <br />
                    <input onClick={resetPassword} className="login-btn" type="reset" value="Reset" />
                </form>
                <img onClick={handleGoogleSignIn} className='img-fluid p-3' src={img} alt="" />
            </div>
        </div>
    );
};

export default LogIn;