import React from 'react';
import './Freezone.css';
import { Link } from 'react-router-dom';
import FreezoneImg2 from '../assets/FreezoneImg2.png';

const FreezoneAssist = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 offset-lg-1">
                        <p className='freezone-offer-blue'>What to know how we will assist you?</p>
                        <p className='freezone-offer-heading'>We offer A Complete <br /> <span>  Assistance for Free Zone Setup</span>
                        </p>
                        <p className='freezone-offer-label'> Our Free Zone Company Setup Services Include:</p>
                        <p className='freezone-offer-icon'> <i class="bi bi-check-circle-fill text-primary"></i> Expert advice on selecting the most suitable free zone.</p>
                        <p className='freezone-offer-icon'> <i class="bi bi-check-circle-fill text-primary"></i> Assistance in preparing and submitting all necessary documents.</p>
                        <p className='freezone-offer-icon'> <i class="bi bi-check-circle-fill text-primary"></i> Coordinating with government agencies to streamline the process.</p>
                        <p className='freezone-offer-icon'><i class="bi bi-check-circle-fill text-primary"></i> Reviewing and finalizing all legal contracts and agreements.</p>
                        <p className='freezone-offer-icon'><i class="bi bi-check-circle-fill text-primary"></i> Guidance on setting up corporate banking and financial services.
                        </p>
                        <p className='freezone-offer-icon'><i class="bi bi-check-circle-fill text-primary"></i> Helping you obtain the required permits, visas, and approvals.</p>
                        <p className='freezone-offer-icon'>Our dedicated team provides personalized solutions, ensuring a
                            seamless and efficient setup process tailored to your business.</p>
                        <div className="row ">
                            <div className="col-md-6 d-flex justify-content-end frezone-first-button">
                                <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>

                            </div>
                            <div className="col-md-6 d-flex justify-content-end frezone-first-button">
                                <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src={FreezoneImg2} alt="AssistImg" className='freezoneImg' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default FreezoneAssist;