import React from 'react';
import { Link } from 'react-router-dom';
import './StartJourney.css';
const FreeConsultation = () => {
    return (
        <div>
            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-10 offset-md-1 bg-linear rounded-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className=' freeconst-looking mb-0 '>Looking to find the best option for you?</p>
                                <p className='freeconst-get mb-0'>GET A free consultation</p>
                            </div>
                            <div className="col-lg-3 offset-lg-3 align-self-center text-center">
                                <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center bg-dark' to="/contact">
                                Contact Us {'>'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FreeConsultation;