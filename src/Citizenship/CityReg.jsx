import React from 'react';
import { Link } from 'react-router-dom';
import CityImg from '../assets/photo-06.png';
const CityReg = () => {
  return (
    <div> 
      <div className="container pt-5 px-3">
      <div className="row">
        <div className="col-lg-6 offset-lg-1">
          <p className='freezoneLooking'>How to Obtain a Second Citizenship?</p>
          <p className='freezoneSetup'>Explore Pathways to <br /><span>Global Citizenship</span> </p>
          <p className='freezoneStart'>We assist in obtaining second citizenship through investment, residency, and naturalization programs. 
          </p>
          <p className='freezoneStart'>Our experts guide you in selecting the best country based on your needs, handling the entire process from application to approval for a smooth transition.</p>
          <div className=' freezone-cost-main'>
            <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
            <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
          </div>

        </div>
        <div className="col-lg-5">
          <img src={CityImg} alt="" className=' freezoneImg' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default CityReg;