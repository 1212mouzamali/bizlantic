import React from 'react';
import { Link } from 'react-router-dom';
import WebImg from '../assets/photo-13.png';
const WebReg = () => {
  return (
    <div>
      <div className="container pt-5 px-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <p className='freezoneLooking'>How Can We Build Your Website & App?</p>
            <p className='freezoneSetup'>Custom Website & <br /><span>App Development  </span></p>
            <p className='freezoneStart'>
              We specialize in website and app development, offering customized solutions tailored to your business needs.
            </p>
            <p className='freezoneStart'>
              
              From UI/UX design to full-stack development, we ensure seamless functionality, scalability, and performance. Let us bring your vision to life with innovative technology.</p>
            <div className=' freezone-cost-main'>
              <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
              <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
            </div>

          </div>
          <div className="col-lg-5">
            <img src={WebImg} alt="" className=' freezoneImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebReg;