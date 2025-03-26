import React from 'react';
import FreezoneImg2 from '../assets/FreezoneImg2.png';
import { Link } from 'react-router-dom';

const WebOffer = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-5 offset-lg-1">
            <p className='Popins-medium text-primary text-lg-start text-center'>Know more about what we offer</p>
            <p className='Popins-medium fs-2 text-lg-start text-center'>We offer A Complete <br /> <span className='Popins-bold'> Assistance for web & app development</span>
            </p>
            <p className='Popins-medium text-lg-start text-center'> Our Website and App Development Services Include:</p>
            <p className='Popins-light assist-lines-size text-lg-start text-center'> <i class="bi bi-check-circle-fill text-primary"></i>    Custom website & mobile app development</p>
            <p className='Popins-light assist-lines-size text-lg-start text-center'> <i class="bi bi-check-circle-fill text-primary"></i>  Scalable & future-proof digital solutions   </p>
            <p className='Popins-light assist-lines-size  text-lg-start  text-center'> <i class="bi bi-check-circle-fill text-primary"></i> AHigh-performance & optimized speed</p>
            <p className='Popins-light assist-lines-size  text-lg-start  text-center'><i class="bi bi-check-circle-fill text-primary"></i>    Secure & reliable infrastructure</p>
            <p className='Popins-light assist-lines-size text-lg-start text-center'><i class="bi bi-check-circle-fill text-primary"></i>  Cross-platform compatibility</p>
            <p className='Popins-light assist-lines-size text-lg-start text-center'><i class="bi bi-check-circle-fill text-primary"></i> End-to-end support & maintenance </p>
            <p className='Popins-light assist-lines-size text-lg-start text-center'>Our dedicated team provides personalized solutions, ensuring a seamless and efficient setup process tailored to your business.</p>
            <div className="row ">
              <div className="col-md-6 d-flex justify-content-end frezone-first-button">
                <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>

              </div>
              <div className="col-md-6 d-flex justify-content-end frezone-first-button">
                <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <img src={FreezoneImg2} alt="AssistImg" className='freezoneImg'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WebOffer;