import React from 'react';
import FreezoneImg2 from '../assets/FreezoneImg2.png';
import { Link } from 'react-router-dom';
const CityOffer = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1">
                        <p className='Popins-medium text-primary text-lg-start text-center'>Know more about what we offer</p>
                        <p className='Popins-medium fs-2 text-lg-start text-center'>Expert Guidance for <br /> <span className='Popins-bold'> Global Citizenship Solutions</span>
                        </p>
                        <p className='Popins-medium text-lg-start text-center'>Our Citizenship Services Include: </p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'> <i class="bi bi-check-circle-fill text-primary"></i>  Visa-free access to multiple countries</p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'> <i class="bi bi-check-circle-fill text-primary"></i>  Tax savings and wealth protection</p>
                        <p className='Popins-light assist-lines-size  text-lg-start  text-center'> <i class="bi bi-check-circle-fill text-primary"></i> Business expansion and market access</p>
                        <p className='Popins-light assist-lines-size  text-lg-start  text-center'><i class="bi bi-check-circle-fill text-primary"></i>   Enhanced security and economic stability</p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'><i class="bi bi-check-circle-fill text-primary"></i> Better healthcare and education options</p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'><i class="bi bi-check-circle-fill text-primary"></i> Citizenship passed to future generations </p>
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
                        <img src={FreezoneImg2} alt="AssistImg" className='w-100' />
                    </div>
                </div>

            </div>

        </div >
    )
}

export default CityOffer;