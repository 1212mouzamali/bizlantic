import React from 'react';
import './StartJourney.css';
import { Link } from "react-router-dom";
// import Burjimg from '../assets/Burjimg.jpg';
import Posi from '../assets/photo-02.png';
const WhyUs = () => {
    return (
        <div className="whyus-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1  order-last order-lg-first">
                        <img src={Posi} alt="" className='w-100 Posi h-100' />
                    </div>
                    <div className="col-lg-6 whyus-second-col">
                        <p className='who-are-we'>Who are we, and why choose us?</p>
                        <p className='we-r-biz'>WE ARE <span >BIZLANTIC</span> </p>
                        <p className='who-dec'>With decades of expertise, we have successfully guided numerous local
                            and international businesses in establishing a strong foothold in Dubai.
                        </p>
                        <p className='who-dec'>Our diverse portfolio spans startups, SMEs, and multinational corporations,
                            reflecting our commitment to delivering tailored business solutions.
                        </p>
                        <p className='who-dec'>Whether you're launching a new venture, expanding your operations, or
                            navigating the complexities of the UAE market, our expert team is here to
                            provide strategic support and ensure your business thrives.
                        </p>
                        <p className='who-dec'>We offer customized strategies that drive long-term success.</p>

                        <div className="row mt-5">
                            <div className="col-lg-6 mt-2">
                                <button className='btn border btn-light why-btn shadow py-2'> <span className='text-primary why-btn-span'>10,000+</span> Trusted Clients</button>

                            </div>
                            <div className="col-lg-6 mt-2">
                                <button className='btn border btn-light why-btn  shadow py-2'> <span className='text-primary  why-btn-span '>20+</span> Years of Experience</button>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-lg-6 mt-2">
                                <button className='btn border btn-light  why-btn shadow py-2'> <span className='text-primary  why-btn-span'>500+</span> Agents to serve</button>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <Link to='/about' className='btn border btn-primary  why-btn   shadow py-2'>Learn More About Us </Link>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;