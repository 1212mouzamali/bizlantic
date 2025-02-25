import React from 'react';
import './AboutTopHeader.css';
import map from '../assets/map.png';
import Gradientlogo from '../assets/Gradientlogo.png'
const GlobeAbout = () => {
    return (
        <div className='globe-about-main' >
            <div className="container">
                <div className="row">
                    <div className="col">
                       <div className='d-flex justify-content-center'> <img src={Gradientlogo} alt="" className='Gradientlogo' /></div>
                    <p className='about-global  d-flex justify-content-center'>Connecting Global </p>
                    <p className='about-dubai  d-flex justify-content-center'>Businesses to Dubai</p>
                    <img src={map} alt="" className='map-img' />
                    </div>
                    
                </div>
                
            </div>
                        <div className="text-center about-text-below-map py-3">
                            <p className='first-para'>
                            We are a dedicated team with in-depth knowledge of UAE’s business landscape,
                            </p>
                            <p className='second-para'>
                            making us the ideal partner to help you navigate & drive your business growth with success.
                            </p>
                        </div>
        </div>
    );
};

export default GlobeAbout;