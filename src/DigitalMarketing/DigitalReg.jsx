import React from 'react'
import { Link } from 'react-router-dom';
import DigitalImg from '../assets/photo-11.png';
const DigitalReg = () => {
    return (
        <div>
            <div className="container pt-5 px-3">
                <div className="row">
                    <div className="col-lg-6 offset-lg-1">
                        <p className='freezoneLooking'>How Can Digital Marketing Help?</p>
                        <p className='freezoneSetup'>Boost Your Brand with<br /><span> Digital Marketing</span></p>
                        <p className='freezoneStart'>At Bizlantic, we provide cutting-edge digital marketing solutions to help you grow your brand, increase engagement, and drive sales. 
                        </p>
                        <p className='freezoneStart'>
                        From social media management to SEO, paid ads, and content marketing, we craft strategies tailored to your business goals.</p>
                        <div className=' freezone-cost-main'>
                            <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
                            <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
                        </div>

                    </div>
                    <div className="col-lg-5">
                        <img src={DigitalImg} alt="" className=' freezoneImg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalReg;