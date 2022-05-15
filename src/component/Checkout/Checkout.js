import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
// import { useParams } from 'react-router-dom';


const Checkout = () => {
const [user] = useAuthState(auth)

const {email, displayName} = user;

    const formSubmit = e =>{
        e.preventDefault()
        toast("thank you for the booking.");
    }
    return (
        <div>
            <div className="log-in mt-5">
                <h2>Booking</h2>
                <form onSubmit={formSubmit} className="form">
                    <input type="name" placeholder={displayName} disabled />  <br></br>
                    <input type="email" placeholder={email} disabled />  <br></br>
                    <input type="text" style={{height: '50px'}} placeholder="Your Address " required />
                    <input type="number" placeholder="Your Mobile " required />
                    <input className="login-btn" type="submit" value="Booking" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Checkout;