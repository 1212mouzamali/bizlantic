import React from 'react';
import { Link } from 'react-router-dom';
import VatImg from '../assets/photo-10.png';
const VatReg = () => {
    return (
        <div>
            <div className="container pt-5 px-3">
                <div className="row">
                    <div className="col-lg-6 offset-lg-1">
                        <p className='freezoneLooking'>Looking for VAT Registration in the UAE?</p>
                        <p className='freezoneSetup'>VAT Registration <br /><span>for Your Business</span> </p>
                        <p className='freezoneStart'>Navigating VAT registration in the UAE can be complex,
                            but we’re here to simplify the process. Our team of experts will guide you through every step,
                            ensuring compliance with UAE tax laws.
                        </p>
                        <p className='freezoneStart'>From registering your business for VAT to handling documentation and filings, 
                            we provide complete assistance.</p>
                        <div className=' freezone-cost-main'>
                            <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
                            <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
                        </div>

                    </div>
                    <div className="col-lg-5">
                        <img src={VatImg} alt="" className=' freezoneImg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VatReg;