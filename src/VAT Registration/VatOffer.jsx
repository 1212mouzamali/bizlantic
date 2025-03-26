import React from 'react'
import FreezoneImg2 from '../assets/FreezoneImg2.png';
import { Link } from 'react-router-dom';
const VatOffer = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1">
                        <p className='Popins-medium text-primary text-lg-start text-center'>Know more about what we offer</p>
                        <p className='Popins-medium fs-2 text-lg-start text-center'>We offer A Complete <br /> <span className='Popins-bold'>  Assistance for VAT Registration</span>
                        </p>
                        <p className='Popins-medium text-lg-start text-center'> Our VAT Registration Services Include:</p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'> <i class="bi bi-check-circle-fill text-primary"></i>  Full assistance with VAT registration process.</p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'> <i class="bi bi-check-circle-fill text-primary"></i>  Ensure compliance with UAE tax laws.    </p>
                        <p className='Popins-light assist-lines-size  text-lg-start  text-center'> <i class="bi bi-check-circle-fill text-primary"></i> Timely VAT filing and submission</p>
                        <p className='Popins-light assist-lines-size  text-lg-start  text-center'><i class="bi bi-check-circle-fill text-primary"></i>  Maximize VAT refunds and claims</p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'><i class="bi bi-check-circle-fill text-primary"></i> Expert guidance for international trade operations</p>
                        <p className='Popins-light assist-lines-size text-lg-start text-center'><i class="bi bi-check-circle-fill text-primary"></i> Avoid penalties and stay compliant with deadlines. </p>
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

        </div > 
    )
}

export default VatOffer;