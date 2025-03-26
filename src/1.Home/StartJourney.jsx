import React from 'react';
import { Link } from 'react-router-dom';
import './StartJourney.css';
// import Burjimg from '../assets/Burjimg.jpg';
import photo1 from '../assets/photo1.png';
const StartJourney = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 StartJourney-for-grid ">
                        <p className='LookDubai Popins-regular font-twenty'>Planning to start a business in Dubai?</p>
                        <p className='StartYour Popins-regular mb-0'>Start Your UAE </p>
                        <p className='BusJo mb-0'>Business Journey!</p>
                        <p className=' start-business-heading Popins-medium font-twenty'>Use our cost calculator to get business setup estimation right at your fingertip </p>
                        <div className="row">
                            <div className="col bg-linear text-center  py-3 rounded-2">
                                <Link className="btn btn-dark btn-lg Popins-medium w-100" to="/costcalc">
                                    Cost Calculator {">"}
                                </Link>
                            </div>
                        </div>
                        <p className='Help  my-3'>
                            Join the countless entrepreneurs who’ve registered their UAE
                            companies with us. Start your business journey with BIZLANTIC
                            Formations today.
                        </p>
                    </div>
                    <div className="col-lg-5 d-flex  align-items-end pt-5">
                        <img src={photo1} alt="" className='w-100 ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartJourney;