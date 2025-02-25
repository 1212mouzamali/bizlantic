import React from 'react';
import Form from 'react-bootstrap/Form';
import './StartJourney.css';
const UaeCost = () => {
    return (
        <div className='Uae-main bg-light'>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <p className='Uae-calc' >COST CALCULATOR</p>
                        <p className='Uae-how'>HOW MUCH DOES</p>
                        <p className='Uae-setup'>BUSINESS SETUP IN UAE COST?</p>
                        <p className='Uae-help'>This cost calculator helps you estimate expenses such
                            as licensing, office space, and visas, providing a clearer
                            picture of the total cost for setting up your business. </p>
                    </div>
                    <div className="col-sm-5 shadow py-5 rounded text-center">
                        <div className='Uae-cost-calc'>
                            <p className='Uae-cost-calc-label' >What business are you looking to start?</p>
                            <div className="custom-select-wrapper">
                                <Form.Select className="custom-select" aria-label="Default select example">
                                    <option value="">Please select type of business</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                                <button className='btn btn-primary px-5 py-0 ' >Next</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UaeCost;