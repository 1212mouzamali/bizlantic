import React from 'react';
import { Link } from 'react-router-dom';

const FreezoneAbout = () => {
    return (
        <div className='about-main'>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <p className='about-want-to-know'>About Freezone</p>
                        <p className='about-heading'>FREEZONE BENEFITS</p>
                        <p className='about-team'>Free zones are known for their top-tier infrastructure, attractive incentives, and business-friendly policies. They allow 100% foreign
                            ownership, eliminating the need for a local partner, and offer tax benefits, flexible regulations, and strategic locations. With a
                            streamlined setup process, free zones provide a hassle-free environment for businesses of all sizes to establish and grow
                            efficiently.
                        </p>
                    </div>
                </div>
                <hr className='about-hr' />
                <div className="row">
                    <div className="col-md-5 offset-md-1 py-4">
                        <p className='about-vision'>100% Foreign Ownership:</p>
                        <p className='about-team'>One of the main benefits of setting up a business in Dubai's free
                            zones is the ability to own 100% of your company. This offers
                            entrepreneurs greater control, flexibility, and independence in
                            their business operations and decision-making processes.</p>

                        <p className='about-vision'>Tax Benefits: </p>
                        <p className='about-team'>Tax Benefits: One of the key advantages of setting up a business
                            in Dubai's free zones is the tax exemption. Companies operating
                            in these zones are not subject to income taxes, allowing them to
                            minimize expenses and maximize profits.
                        </p>
                        <p className='about-vision'>Additional Benefits:</p>
                        <p className='about-team'>Free zone company in UAE also enjoy various other advantages,
                            such as no restrictions on the repatriation of capital and profits,
                            providing greater financial freedom and flexibility.
                        </p>
                    </div>
                    <div className="col-md-5 py-4">
                        <p className='about-vision'>Easy Company Setup:</p>
                        <p className='about-team'>Setting up a Free Zone company in the UAE is a fast and
                            straightforward process. With a streamlined system and quick
                            approvals, businesses can begin operations without
                            unnecessary delays, ensuring a smooth and efficient setup.</p>
                        <p className='about-team mt-4'>Dubai’s Free Zones offer modern office spaces, fully equipped
                            warehouses, and top-tier transportation infrastructure,
                            providing businesses with the ideal environment to operate,
                            scale, and thrive.</p>
                        <p className='about-vision'>Simplified Employment Visas:</p>
                        <p className='about-team mt-4'>In addition, Free Zone companies benefit from simplified
                            employment visa processes. They can easily hire skilled
                            professionals from both within and outside the UAE, without
                            requiring approval from the Ministry of Human Resources and
                            Emiratisation, further enhancing operational efficiency.</p>
                    </div>
                </div>
                <hr className='about-hr' />
            </div>
            <div className="row ">
                <div className="col-md-8 d-flex justify-content-end frezone-first-button">

                    <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
                    {/* <Link  to="/contact"  className='freezone-cost btn btn-dark'>Contact Us {">"}</Link> */}

                </div>
                <div className="col-md-2 d-flex justify-content-end frezone-first-button">

                    {/* <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link> */}
                    <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>

                </div>
            </div>

        </div>
    );
};

export default FreezoneAbout;