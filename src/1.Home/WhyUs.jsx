import React from 'react';
import './StartJourney.css';
import Burjimg from '../assets/Burjimg.jpg';
const WhyUs = () => {
    return (
        <div className="whyus-main">
            <div className="container">
                <div className="row">
                        <div className="col-1"></div>
                    <div className="col-5 px-0  d-flex align-items-center justify-content-center for-position-main">
                        <div className='for-position-img'></div>
                        <div className='main-burj-img'>
                            <img src={Burjimg} alt="" className='for-position-img-burj-img ' />
                        </div>
                    </div>


                    <div className="col-md-5 whyus-second-col px-0">
                        <p className='who-are-we'>Who are we, and why choose us?</p>
                        <p className='we-r-biz'>WE ARE <span >BIZLANTIC</span> </p>
                        <p className='who-dec'>With decades of expertise, we have successfully guided numerous local
                            and international businesses in establishing a strong foothold in Dubai.
                        </p>
                        <p className='who-di'>Our diverse portfolio spans startups, SMEs, and multinational corporations,
                            reflecting our commitment to delivering tailored business solutions.
                        </p>
                        <p className='who-la'>Whether you're launching a new venture, expanding your operations, or
                            navigating the complexities of the UAE market, our expert team is here to
                            provide strategic support and ensure your business thrives.
                        </p>
                        <p className='who-off'>We offer customized strategies that drive long-term success.</p>
                        <div>
                            <button className='btn border btn-light p-3 why-btn-1 shadow'> <span className='text-primary why-btn-span'>10,000+</span> Trusted Clients List</button>
                            <button className='btn border btn-light why-btn p-3 shadow'> <span className='text-primary  why-btn-span '>20+</span> Years of Experience</button>
                        </div>
                        <div className='mt-3'>
                            <button className='btn border btn-light  why-btn-1 p-3 shadow'> <span className='text-primary  why-btn-span'>500+</span> Agents at your service</button>
                            <button className='btn border btn-primary  why-btn pt-3 pb-3 shadow pe-5'>Learn More About Us </button>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;