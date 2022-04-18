import React from 'react';
import './Log_Out.css'

const Log_Out = () => {
    return (
        <div>
            <div className="register mt-5">
                <h2>Log Out</h2>
                <form className="form">
                    <input type="text" placeholder="Your Name " required />  <br></br>
                    <input type="email" placeholder="Your Email " required />  <br></br>
                    <input type="password" placeholder="Your Password " required />
                </form>
                <input type="checkbox" /><labe> Already  Have An Account</labe>
                <br />
                <h4 className="reg-btn">Register</h4>
            </div>
        </div>
    );
};

export default Log_Out;