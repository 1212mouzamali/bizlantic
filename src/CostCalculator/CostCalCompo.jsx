import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './CostCalc.css';
import Gradientlogo from '../assets/Gradientlogo.png';
import mapright from '../assets/mapright.png';
import mapleft from '../assets/mapleft.png'




const CostCalCompo = () => {

    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);




    const [formData, setFormData] = useState({
        businessType: "",
        shareholders: 1,
        residenseVisa: 1,
        officeSpace: "",
        licenseType: "",
        cityType: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };








    const [otpSent, setOtpSent] = useState(null);
    const [otpEntered, setOtpEntered] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/submit-form", formData);
            if (response.data.success) {
                setOtpSent(response.data.otp);
                alert("OTP sent to your phone!");
                setStep(8); // Move to OTP verification step
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post("http://localhost:3000/verify-otp", {
                phone: formData.phone,
                otpEntered,
                otpSent
            });
            if (response.data.success) {
                alert("OTP Verified! Thank you.");
                setStep(9); // Show confirmation message
            } else {
                alert("Invalid OTP, please try again.");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
    };

    return (
        <div className='cost-calc-main'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 ">
                        <img src={mapleft} alt="" className='w-100' />
                    </div>
                    <div className="col-4 text-center">
                        <img src={Gradientlogo} alt="" className='g-logo-cost-calc' />
                        <p className='cost-calc-heading'>Cost Calculator</p>

                        {step === 1 && (
                            <div >
                                <p className='cost-calc-select-label'>What type of business are you looking to start?</p>
                                <div className="custom-select-wrapper">
                                    <Form.Select className="custom-select" name="businessType" onChange={handleChange} value={formData.businessType}>
                                        <option value="">Select Business Type</option>
                                        <option value="Retail">ReTwo</option>
                                        <option value="Tech">Two</option>
                                        <option value="Finance">FinTwo</option>
                                    </Form.Select>
                                </div>
                                <button className='btn btn-dark px-5 py-0 ' >Previous</button>
                                <button onClick={nextStep} className='btn btn-primary px-5 py-0'>Next</button>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <p className='cost-calc-select-label'>How many shareholders will your company have?</p>
                                <div className="custom-select-wrapper d-flex justify-content-evenly">
                                    <button onClick={() => setFormData({ ...formData, shareholders: Math.max(0, formData.shareholders - 1) })} className='costcalc-negative '>-</button>                                   <span>{formData.shareholders}</span>
                                    <button onClick={() => setFormData({ ...formData, shareholders: formData.shareholders + 1 })} className='costcalc-positive'>+</button>
                                    <br />

                                </div>
                                <button onClick={prevStep} className='btn btn-dark px-5 py-0 '>Previous</button>
                                <button onClick={nextStep} className='btn btn-primary px-5 py-0'>Next</button>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <p className='cost-calc-select-label'>How many residence visas do you require?</p>
                                <div className="custom-select-wrapper">
                                    <button onClick={() => setFormData({ ...formData, residenseVisa: Math.max(0, formData.residenseVisa - 1) })} className='btn btn-dark px-5 py-0 '>-</button>
                                    <span>{formData.residenseVisa}</span>
                                    <button onClick={() => setFormData({ ...formData, residenseVisa: formData.residenseVisa + 1 })} className='btn btn-dark px-5 py-0 '>+</button>
                                    <br />

                                </div>
                                <button onClick={prevStep} className='btn btn-dark px-5 py-0 '>Previous</button>
                                <button onClick={nextStep} className='btn btn-primary px-5 py-0'>Next</button>
                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <p className='cost-calc-select-label'>What type of office space do you require?</p>
                                <div className="custom-select-wrapper">
                                    <Form.Select name="officeSpace" onChange={handleChange} value={formData.officeSpace} className="custom-select">
                                        <option value="">Select Office Space</option>
                                        <option value="Co-working">Co-working</option>
                                        <option value="Private">Private</option>
                                        <option value="Virtual">Virtual</option>
                                    </Form.Select>
                                </div>

                                <br />
                                <button onClick={prevStep} className='btn btn-dark px-5 py-0 '>Previous</button>
                                <button onClick={nextStep} className='btn btn-primary px-5 py-0'>Next</button>
                            </div>
                        )}
                        {step === 5 && (
                            <div>
                                <p className='cost-calc-select-label'>What type of licence you want</p>
                                <div className="custom-select-wrapper">
                                    <Form.Select name="officeSpace" onChange={handleChange} value={formData.licenseType} className="custom-select">
                                        <option value="">Select Office Space</option>
                                        <option value="Co-working">Co-working</option>
                                        <option value="Private">Private</option>
                                        <option value="Virtual">Virtual</option>
                                    </Form.Select>
                                </div>

                                <br />
                                <button onClick={prevStep} className='btn btn-dark px-5 py-0 '>Previous</button>
                                <button onClick={nextStep} className='btn btn-primary px-5 py-0'>Next</button>
                            </div>
                        )}
                        {step === 6 && (
                            <div>
                                <p className='cost-calc-select-label'>Which city do you want to start</p>
                                <div className="custom-select-wrapper">
                                    <Form.Select name="officeSpace" onChange={handleChange} value={formData.cityType} className="custom-select">
                                        <option value="">Select Office Space</option>
                                        <option value="Co-working">Co-working</option>
                                        <option value="Private">Private</option>
                                        <option value="Virtual">Virtual</option>
                                    </Form.Select>
                                </div>

                                <br />
                                <button onClick={prevStep} className='btn btn-dark px-5 py-0 '>Previous</button>
                                <button onClick={nextStep} className='btn btn-primary px-5 py-0'>Next</button>
                            </div>
                        )}

                        {step === 7 && (
                            <div>
                                <p className='cost-calc-select-label'>Please share the following information in order to get the price.</p>
                                <Form >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter your name" />
                                                </Form.Group>
                                            </div>
                                            <div className="col-6">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter your name" />

                                                </Form.Group>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label>Your Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter your email ID" />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-6">
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label>Mobile Number</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter your number" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                <br />
                                <button onClick={prevStep} className='btn btn-dark px-5 py-0 '>Previous</button>
                                <button onClick={handleSubmit} className='btn btn-dark px-5 py-0 '>Submit</button>
                            </div>
                        )}
                        {step === 8 && (
                            <div>
                                <p className='cost-calc-select-label'>Enter the OTP send to your phone</p>
                                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter OTP" />
                                <button onClick={prevStep} className='btn btn-dark px-5 py-0 '>Previous</button>
                                <button onClick={verifyOtp} className='btn btn-primary px-5 py-0'>Verify and send</button>
                            </div>
                        )}

                        {step === 9 && (
                            <div>
                                <p className='cost-calc-select-label'>Thank you for you interest starting business in United Arab Emirates,
                                    one of our agent will get back to you soon</p>
                                <Link to="/" className='btn btn-success px-5 py-0'>{"<"} Back to Site</Link>
                            </div>
                        )}


                    </div>
                    <div className="col-4">
                        <img src={mapright} alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CostCalCompo;


