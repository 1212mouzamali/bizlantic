import React from 'react';
import { Link } from 'react-router-dom';
import MainlandImg from '../assets/photo-03.png';
const MainReg = () => {
  return (
    <div>
      <div className="container pt-5 px-3">
        <div className="row">
          <div className="col-lg-6 offset-md-1">
            <p className='freezoneLooking'>Why choose a Dubai mainland license?</p>
            <p className='freezoneSetup'>Mainland Company<br /><span> Setup in Dubai, UAE</span> </p>
            <p className='freezoneStart'>At Bizlantic, we specialize in premium Mainland Business Setup Services, designed to meet the unique requirements of both aspiring entrepreneurs and established enterprises. 
            </p>
            <p className='freezoneStart'>From company registration to licensing, compliance, and beyond, we ensure a smooth and hassle-free setup process.</p>
            <div className=' freezone-cost-main'>
              <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
              <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
            </div>

          </div>
          <div className="col-lg-5">
            <img src={MainlandImg} alt="" className=' freezoneImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainReg;