import React from 'react';
import './StartJourney.css';
const UaeCost = () => {
    return (
        <div className='Uae-main bg-light'>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <p className='LookDubai' >COST CALCULATOR</p>
                        <p className='Uae-how'>HOW MUCH DOES  <span className='Uae-setup'>BUSINESS SETUP IN UAE COST?</span></p>

                        <p className='Help'>This cost calculator helps you estimate expenses such
                            as licensing, office space, and visas, providing a clearer
                            picture of the total cost for setting up your business. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 bg-linear text-center offset-md-3 py-3 rounded-2">
                        <div className="btn btn-dark btn-lg Popins-medium w-100">
                            Cost Calculator {">"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UaeCost;