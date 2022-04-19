import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Register.css'
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    };
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
    };
    const handleConfirmPasswordBlur = e =>{
        setConfirmPassword(e.target.value)
    };

    if(user){
        navigate('/home')
    }

    const handleCreatUser = e =>{
        e.preventDefault()

        if(confirmPassword !== password){
            setError('Password Do Not Mach')
            return;
        }
        if(password.length < 6){
            setError('Password Must Be 6 Character')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div>
            <div className="register mt-5">
                <h2>Register</h2>
                <form onSubmit={handleCreatUser} className="form">
                    <input onBlur={handleEmailBlur} type="email" placeholder="Your Email " required />  <br></br>
                    <input onBlur={handlePasswordBlur} type="password" placeholder="Your Password " required />
                    <input onBlur={handleConfirmPasswordBlur} type="password" placeholder="Type Confirm Password " required />
                    <p>
                    Already  Have An Account? <Link className='form-link' to="/log-in" style={{color: '#EE831F', fontWeight: '700'}}>Log In </Link>
                </p>
                <p>{error}</p>
                    <input className="reg-btn" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;