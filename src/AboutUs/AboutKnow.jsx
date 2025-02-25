import React from 'react';
import './AboutTopHeader.css';

const AboutKnow = () => {
    return (
        <div className='about-main'>
            <div className="container">
                <p className='about-want-to-know'>Want to know more</p>
                <p className='about-heading'>ABOUT BIZLANTIC</p>
                <p className='about-team'>Our team is a group of experienced professionals with in-depth knowledge of setting up and running businesses in the UAE. From
                    selecting the right business license to advising on mainland, free zone, or offshore companies, we offer complete support.
                </p>
                <p className='about-team'>We're dedicated to making your business a reality quickly, saving you valuable time and money</p>
                <hr className='about-hr' />
                <div className="row">
                    <div className="col-6 py-4">
                        <p className='about-vision'>Our Vision:</p>
                        <p className='about-team'>Based in Dubai, we strive to be a trusted and respected
                            management consultancy, supporting global entrepreneurs
                            and businesses in launching and expanding their operations in
                            Dubai and the UAE</p>
                        <p className='about-team'>Our vision is to be the preferred choice for delivering
                            end-to-end, cutting-edge solutions that simplify business
                            setup, ensure compliance, and drive lasting success.</p>
                        <p className='about-vision'>Our Mission: </p>
                        <p className='about-team'>As a leading management consultancy in Dubai, our mission is
                            to render superior, individualized services and expert guidance
                            to businesses—both local and international—aspiring to set up
                            and prosper in Dubai.</p>
                        <p className='about-team'>We ensure end-to-end support, covering business initiation,
                            registration, licensing, and compliance.</p>
                    </div>
                    <div className="col-sm-6 py-4">
                        <p className='about-vision'>Why Choose Us?</p>
                        <p className='about-team'>Bizlantic is your trusted partner for customized business setup
                            solutions in the UAE. Our multilingual team combines industry
                            expertise and innovative strategies to address your unique
                            needs, ensuring a seamless setup process.</p>
                        <p className='about-team mt-4'>From company registration and licensing to compliance and
                            visa services, we provide end-to-end support tailored to your
                            goals.</p>
                        <p className='about-team mt-4'>We believe financial stability is key to success. Leveraging our
                            experience, we deliver top-tier solutions to help your business
                            thrive. Partnering with Bizlantic means gaining more than a
                            service provider—it means having a dedicated advisor
                            committed to your growth.</p>
                        <p className='about-team mt-4'>Let us guide you in building a strong foundation and achieving
                            success in Dubai’s dynamic market.</p>
                    </div>
                </div>
                <hr className='about-hr' />
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-3  d-flex justify-content-end">
                        <button className="button btn btn-primary about-calc px-3">Cost Calculator {'>'}</button>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                    <button className="button btn btn-dark about-calc px-5">Contact Us {'>'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutKnow;