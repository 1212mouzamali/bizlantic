import React from 'react';
import './StartJourney.css';
const FreeConsultation = () => {
    return (
        <div>
            <div className="container free-consultation-main">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-6 py-2">
                        <p className='cons-top'>LOOKING TO FIND THE BEST OPTION FOR YOU?</p>
                        <p className='cons-bottom'>GET A FREE CONSULTATION</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <button className='btn btn-dark px-5 cons-contact'>CONTACT US {'>'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeConsultation;