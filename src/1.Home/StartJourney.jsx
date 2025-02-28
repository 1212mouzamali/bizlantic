import React from 'react';
import Form from 'react-bootstrap/Form';
import './StartJourney.css';
// import Burjimg from '../assets/Burjimg.jpg';
import Posi from '../assets/posi.jpg';
const StartJourney = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-5 offset-md-1 StartJourney-for-grid ">
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
                    <div className="col-md-5 d-flex  aligin-items-end pt-5">
                    <img src={Posi} alt=""  className='w-100 ' />
                    </div>              
                  
                </div>
            </div>
        </div>
    );
};

export default StartJourney;