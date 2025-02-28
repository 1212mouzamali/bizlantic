import React from 'react';
import { Link } from 'react-router-dom';
import './StartJourney.css';
const RegisterBar = () => {
    return (
        <div className='reg-bar py-3'>
           <div className="container  ">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-7 register-para">
                    <p> Register yourself as a business owner or service agent & be a part of growing business community</p>
               
                </div>
                <div className="col-1"></div>
                <div className="col-2 register-now text-center">
                    <Link to= "/register" >Register Now</Link>
                </div>
            </div>
           </div>
        </div>
    );
};

export default RegisterBar;