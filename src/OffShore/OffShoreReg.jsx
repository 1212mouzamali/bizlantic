import React from 'react';
import { Link } from 'react-router-dom';
import OffshoreImg from '../assets/photo-05.png';
const OffShoreReg = () => {
  return (
    <div>
      <div className="container pt-5 px-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <p className='freezoneLooking'>How to start a dubai offshore company?</p>
            <p className='freezoneSetup'>Offshore Company Setup in Dubai, UAE</p>
            <p className='freezoneStart'>Start your Dubai offshore business with Bizlantic’s all-inclusive setup services.
            </p>
            <p className='freezoneStart'>Our expert team handles license procurement, document preparation, and workspace solutions, ensuring a smooth and efficient process for your business launch.</p>
            <div className=' freezone-cost-main'>
              <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
              <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
            </div>

          </div>
          <div className="col-lg-5">
            <img src={OffshoreImg} alt="" className=' freezoneImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffShoreReg;