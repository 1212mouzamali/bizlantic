import React from 'react';
import { Link } from 'react-router-dom';
import GoldImg from '../assets/photo-07.png';
const GoldReg = () => {
  return (
    <div>
      <div className="container pt-5 px-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <p className='freezoneLooking'>What is the UAE Golden Visa?</p>
            <p className='freezoneSetup'>Long-Term <br /><span>Residency in UAE</span></p>
            <p className='freezoneStart'>The UAE Golden Visa offers long-term residency to investors, entrepreneurs, and skilled professionals. We assist you with the entire process, from application to approval.
            </p>
            <p className='freezoneStart'>Our experts will guide you through the paperwork, ensure eligibility, and help you secure this valuable visa.</p>
            <div className=' freezone-cost-main'>
              <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
              <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
            </div>

          </div>
          <div className="col-lg-5">
            <img src={GoldImg} alt="" className=' freezoneImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoldReg;