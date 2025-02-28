import React from 'react';
import './Freezone.css';
import { Link } from 'react-router-dom';
import FreezoneImg from '../assets/FreezoneImg.jpg'
const FreezoneStart = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 offset-md-1">
                        <p className='freezoneLooking'>Looking to start a company in Freezone?</p>
                        <p className='freezoneSetup'>Freezone Company
                            Setup in Dubai, UAE</p>
                        <p className='freezoneStart'>Start your business in Dubai’s free zones with our expert
                            company setup services. </p>
                        <p className='freezoneStart'>We help you choose the right free zone, handle legal and
                            regulatory requirements, and ensure a smooth setup
                            process. Focus on growing your business while we take care
                            of the details.</p>
                            <div className=' freezone-cost-main'>
                            <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
                            <Link  to="/contact"  className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
                            </div>
                           
                    </div>
                    <div className="col-md-5">
                            <img src={FreezoneImg} alt="" className=' freezoneImg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreezoneStart;