import React from 'react'
import { Link } from 'react-router-dom';
import SocialImg from '../assets/photo-12.png';
const SocialReg = () => {
    return (
        <div>
            <div className="container pt-5 px-3">
                <div className="row">
                    <div className="col-lg-6 offset-lg-1">
                        <p className='freezoneLooking'>How Can Social Media Grow Your Business?</p>
                        <p className='freezoneSetup'>Boost Your Brand with<br /><span>  Expert Management</span></p>
                        <p className='freezoneStart'>We help you elevate your brand with expert social media management. From content creation and audience engagement to ad campaigns and analytics, we ensure a strong presence. 
                        </p>
                        <p className='freezoneStart'>Let us handle your platforms while you focus on growing your business.</p>
                        <div className=' freezone-cost-main'>
                            <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
                            <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
                        </div>

                    </div>
                    <div className="col-lg-5">
                        <img src={SocialImg} alt="" className=' freezoneImg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialReg;