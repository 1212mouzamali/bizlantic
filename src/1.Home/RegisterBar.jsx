import React from 'react';
import { Link } from 'react-router-dom';
import './StartJourney.css';
const RegisterBar = () => {
    return (
        <div className='reg-bar py-3'>
           <div className="container  ">
            <div className="row">                
                <div className="col-md-9 offset-md-1 register-para">
                    <p> Register yourself as a business owner or service agent & be a part of growing business community</p>
               </div>                
                <div className="col-md-2 register-now">
                    <Link to= "/register" >Register Now</Link>
                </div>
            </div>
           </div>
        </div>
    );
};

export default RegisterBar;