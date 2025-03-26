import React from 'react';
import './Freezone.css';
import { Link } from 'react-router-dom';
import FreezoneImg from '../assets/photo-04.png';

const FreezoneStart = () => {
    return (
        <div>
            <div className="container py-5 px-3">
                <div className="row">
                    <div className="col-lg-6 offset-lg-1">
                        <p className='freezoneLooking'>Looking to start a company in Freezone?</p>
                        <p className='freezoneSetup'>Freezone Company <br /><span>Setup in Dubai, UAE</span> </p>
                        <p className='freezoneStart'>Start your business in Dubai’s free zones with our expert
                            company setup services. </p>
                        <p className='freezoneStart'>We help you choose right free zone, handle legal and
                            regulatory requirements, and ensure a smooth
                            process. Focus on growing your business while we take care
                            of the details.</p>
                        <div className=' freezone-cost-main'>
                            <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
                            <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src={FreezoneImg} alt="" className=' freezoneImg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreezoneStart;