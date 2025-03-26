import React from 'react'
import { Link } from 'react-router-dom';
import BankImg from '../assets/photo-08.png';
const BankReg = () => {
  return (
   <div className="container pt-5 px-3">
                   <div className="row">
                       <div className="col-lg-6 offset-lg-1">
                           <p className='freezoneLooking'>Need Assistance Opening a Bank Account?</p>
                           <p className='freezoneSetup'>Get Assistance with <br /><span>Bank Account Setup</span> </p>
                           <p className='freezoneStart'>At Bizlantic, we simplify the bank account setup process for your business with our experts assist you in choosing the right bank, preparing necessary documentation, and navigating approval.
                           </p>
                           <p className='freezoneStart'>We ensure smooth and efficient account opening for your Dubai offshore or mainland company, saving you time and effort.</p>
                           <div className=' freezone-cost-main'>
                               <Link to="/costcalc" className='freezone-cost btn btn-primary'>Cost Calculator {">"}</Link>
                               <Link to="/contact" className='freezone-cost btn btn-dark'>Contact Us {">"}</Link>
                           </div>
   
                       </div>
                       <div className="col-lg-5">
                           <img src={BankImg} alt="" className=' freezoneImg' />
                       </div>
                   </div>
               </div>
  )
}

export default BankReg;