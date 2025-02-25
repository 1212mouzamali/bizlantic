import React from 'react';
import Form from 'react-bootstrap/Form';
import './StartJourney.css';
import Burjimg from '../assets/Burjimg.jpg';
const StartJourney = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 StartJourney-for-grid">
                        <p className='LookDubai'>Planning to start a business in Dubai?</p>
                        <p className='StartYour'>Start Your </p>
                        <p className='BusJo'>Business Journey!</p>
                       
                        <div className="custom-select-wrapper border shadow">
                            <Form.Select className="custom-select" aria-label="Default select example">
                                <option value="">Please select type of business</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <button className='btn btn-primary px-5 py-1 ' >Next</button>
                        </div>
                        <p className='Help text-secondary my-3'>Join the countless entrepreneurs who’ve registered their UAE
                            companies with us. Start your business journey with BIZLANTIC
                            Formations today.</p>


                    </div>
                    <div className="col-md-6   d-flex align-items-end justify-content-center for-position-main">
                        <div className='for-position-img'></div>
                        <div className='main-burj-img'>
                            <img src={Burjimg} alt=""  className='for-position-img-burj-img '/>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default StartJourney;