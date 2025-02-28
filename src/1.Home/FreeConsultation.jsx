import React from 'react';
import './StartJourney.css';
const FreeConsultation = () => {
    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-10 free-consultation-main  d-flex justify-content-between">
                        <div>
                        <p className='cons-top '>LOOKING TO FIND THE BEST OPTION FOR YOU?</p>
                        <p className='cons-bottom '>GET A FREE CONSULTATION</p>
                        </div>
                        
                        <div className=''>
                            <button className='btn btn-dark  cons-contact'>CONTACT US {'>'}</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FreeConsultation;