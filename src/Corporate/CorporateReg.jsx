import React from 'react'
import { Link } from 'react-router-dom';
import CorporateImg from '../assets/photo-01.png';
const CorporateReg = () => {
  return (
    <div>
      <div className="container pt-5 px-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <p className='freezoneLooking'>Seamless Assistance with Tax Registration</p>
            <p className='freezoneSetup'>Corporate Tax <br /><span> Registration in UAE</span></p>
            <p className='freezoneStart'>We provide expert assistance in registering for corporate tax in the UAE. Our experienced team will guide you through the entire process, ensuring full compliance with local tax regulations.
            </p>
            <p className='freezoneStart'>Let us handle the complexities so you can focus on growing your business efficiently.</p>
            <div className=' freezone-cost-main'>
              <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
              <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
            </div>

          </div>
          <div className="col-lg-5">
            <img src={CorporateImg} alt="" className=' freezoneImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateReg;