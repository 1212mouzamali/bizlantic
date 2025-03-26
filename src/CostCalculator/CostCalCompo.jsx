import React, { useState, useEffect } from 'react';
import { ProgressBar, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Select from "react-select";
import { countries } from "countries-list";
import './CostCalc.css';
import Gradientlogo from '../assets/Gradientlogo.png';
import axios from 'axios';

const CostCalCompo = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countryOptions = Object.entries(countries).map(([code, country]) => ({
        value: country.name,
        label: country.name,
    }));

    const [progress, setProgress] = useState(1);
    const handleNext = () => setProgress((prev) => Math.min(prev + 25, 100));
    const handlePrevious = () => setProgress((prev) => Math.max(prev - 25, 0));

    const [step, setStep] = useState(0);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const [getButtonsData, setButtonsData] = useState([]);
    const handleButtonsData = (e) => {
        const text = e.target.innerText;
        setButtonsData((prev) =>
            prev.includes(text) ? prev.filter((btn) => btn !== text) : [...prev, text]
        );
    };

    useEffect(() => {
        document.querySelectorAll(".arraybtn").forEach((arraybtn) => {
            if (getButtonsData.includes(arraybtn.innerText)) {
                arraybtn.style.setProperty("background-color", "#257cfd", "important");
                arraybtn.style.setProperty("color", "white", "important");
            } else {
                arraybtn.style.setProperty("background-color", "white", "important");
                arraybtn.style.setProperty("color", "black", "important");
            }
        });
    }, [getButtonsData]);

    const [selectedOptions, setSelectedOptions] = useState({
        visa: "",
        shareholder: "",
        officeSpace: "",
    });

    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        nationality: "",
        licensetype: "",
        citytype: "",
    });

    const [otp, setOtp] = useState("");


    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSelectedOptions((previous) => ({ ...previous, [name]: value }));

        if (name === "licensetype" || name === "citytype") {
            setUserInfo((previous) => ({ ...previous, [name]: value }));
        }
    };

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setUserInfo((previous) => ({
            ...previous,
            nationality: selectedOption ? selectedOption.value : "",
        }));
    };
    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((previous) => ({ ...previous, [name]: value }));
    };

    const isNextDisabled = !selectedOptions.visa && !selectedOptions.shareholder && !selectedOptions.officeSpace;

    const sendOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3000/send-otp', {
                phoneNumber: userInfo.phoneNumber,
            });
            if (response.data.success) {
                alert('OTP sent successfully!');
                nextStep();
                handleNext();
            } else {
                alert('Failed to send OTP');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Error sending OTP');
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3000/verify-otp', {
                phoneNumber: userInfo.phoneNumber,
                otp,
            });
            if (response.data.success) {
                alert('OTP verified successfully!');
                saveData();
                nextStep();
                handleNext();
            } else {
                alert('Invalid OTP');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('Error verifying OTP');
        }
    };


    const saveData = async () => {
        try {
            const response = await axios.post('http://localhost:3000/save-data', {
                businessActivities: getButtonsData,
                selectedOptions,
                userInfo,
            });
            if (response.data.success) {
                alert('Data saved successfully!');
            } else {
                alert('Failed to save data');
            }
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data');
        }
    };

    return (
        <div className='cost-calc-main'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 offset-md-2 text-center">
                        <img src={Gradientlogo} alt="" className='g-logo-cost-calc' />
                        <p className='cost-calc-heading Popins-regular'>Find out your estimated setup costs</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 col-md-2 Opacity-map Popins-medium  offset-md-1 font-mobile"><p>Business Activity</p></div>
                    <div className="col-3 Opacity-map Popins-medium  text-md-center p-0 font-mobile"><p>Office,Visa& shareholders</p></div>
                    <div className="col-3 Opacity-map Popins-medium text-end text-md-center font-mobile "><p>Your Information</p></div>
                    <div className="col-3 Opacity-map Popins-medium text-end text-md-center font-mobile" ><p>Total Cost</p></div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <ProgressBar now={progress} className='cost-calc-progressbar Opacity-map rounded-1' />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-10 offset-md-1 Opacity-map">
                        {step === 0 && (
                            <div>
                                <div className="row ">
                                    <div className="col bg-linear py-2 mt-3">
                                        <p className='Popins-medium font-twenty mb-0 '>What type of business are you looking to start?</p>
                                    </div>
                                </div>
                                <div className="row gy-3 mt-3">
                                    {["General Trading", "E-Commerce", "Media Freelancing", "Digital Marketing", "IT Consultancy & Training", "Event Management", "Management Consultancy", "Educational Activities", "PR & Freelancing", "Import & Export", "Travel & Tourism", "Other Activities"].map((text, index) => (
                                        <div className="col-md-3" key={index}>
                                            <button onClick={handleButtonsData} className='btn bg-white border-dark rounded-0 w-100 font-eighteen Popins-regular arraybtn'>
                                                {text}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-3 offset-md-4">
                                        {/* <Button  className=' bg-dark w-25 mx-2 Popins-semibold font-eighteen Opacity-map bg-dark'>
                                        Previous
                                    </Button> */}
                                        <Button onClick={() => { nextStep(); handleNext(); }} disabled={getButtonsData.length === 0} className='w-100 Popins-semibold font-eighteen bg-primary'>
                                            Next {'>'}
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        )}

                        {step === 1 && (
                            <div>
                                <div className="row ">
                                    <div className="col bg-linear py-2 mt-4">
                                        <p className='Popins-medium font-twenty mb-0'>What are the requirements for your business?</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className=' Popins-semibold font-twenty'>How many visa?</Form.Label>
                                            <Form.Select name="visa" onChange={handleSelectChange}>
                                                <option value="" className='Popins-regular'>How many visas do you require?</option>
                                                {[...Array(9).keys()].map(i => (
                                                    <option key={i + 1} value={i + 1} className='Popins-light'>{i + 1}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>How many shareholder?</Form.Label>
                                            <Form.Select name="shareholder" onChange={handleSelectChange}>
                                                <option value="" className='Popins-regular'>How many shareholders you are?</option>
                                                {[...Array(9).keys()].map(i => (
                                                    <option key={i + 1} value={i + 1} className='Popins-light'>{i + 1}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>What type of office space?</Form.Label>
                                            <Form.Select name="officeSpace" onChange={handleSelectChange}>
                                                <option value="" className='Popins-regular'>Office Type</option>
                                                <option value="Virtual" className='Popins-light'>Virtual</option>
                                                <option value="Physical" className='Popins-light'>Physical</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-3 offset-md-2 ">
                                        <Button variant="dark" onClick={() => { handlePrevious(); prevStep(); }} disabled={progress === 0} className='w-100 Popins-semibold font-eighteen Opacity-map py-2'>
                                            Previous {">"}
                                        </Button>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <Button variant="primary" onClick={() => { nextStep(); handleNext(); }} disabled={isNextDisabled} className='w-100 Popins-semibold font-eighteen Opacity-map bg-primary py-2'>
                                            Next {">"}
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <div className="row ">
                                    <div className="col bg-linear py-2 mt-4">
                                        <p className='Popins-medium font-twenty'>What are the requirements for your business?</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>Enter your full name</Form.Label>
                                            <Form.Control name="fullName" placeholder='Full Name' onChange={handleUserInfoChange} />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>Enter your email ID</Form.Label>
                                            <Form.Control name="email" placeholder='Email ID' onChange={handleUserInfoChange} />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>Enter your phone number</Form.Label>
                                            <Form.Control name="phoneNumber" placeholder='Phone Number' onChange={handleUserInfoChange} />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>Enter your nationality</Form.Label>
                                            <Select

                                                options={countryOptions}
                                                value={selectedCountry}
                                                onChange={handleCountryChange}
                                                placeholder="Select your nationality"
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>License Type</Form.Label>

                                            <Form.Select name="licensetype" onChange={handleSelectChange}>
                                                <option value="" className='Popins-medium'>Please select your License Type</option>
                                                <option value="Freezone License" className='Popins-light'>Freezone License</option>
                                                <option value="Mainland License" className='Popins-light'>Mainland License</option>
                                                <option value="Offshore License" className='Popins-light'>Offshore License</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className='Popins-semibold font-twenty'>Where you want to start?</Form.Label>
                                            <Form.Select name="citytype" onChange={handleSelectChange}>
                                                <option value="" className='Popins-medium'>Please select your city</option>
                                                <option value="Abu Dhabi" className='Popins-regular'>Abu Dhabi</option>
                                                <option value="Dubai" className='Popins-regular'>Dubai</option>
                                                <option value="Sharjah" className='Popins-regular'>Sharjah</option>
                                                <option value="Ajman" className='Popins-regular'>Ajman</option>
                                                <option value="Umm Al Quwain" className='Popins-regular'>Umm Al Quwain</option>
                                                <option value="Ras Al Khaimah" className='Popins-regular'>Ras Al Khaimah</option>
                                                <option value="Fujairah" className='Popins-regular'>Fujairah</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-3 offset-md-2 ">
                                        <Button variant="dark" onClick={() => { handlePrevious(); prevStep(); }} className=' w-100 Popins-semibold font-eighteen Opacity-map '>
                                            Previous
                                        </Button>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <Button variant="primary" className='w-100 Popins-semibold font-eighteen Opacity-map bg-primary py-2' onClick={sendOtp}>
                                            Send OTP
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        )}

                        {step === 3 && (
                            <div>
                                <div className="row ">
                                    <div className="col bg-linear py-2 mt-4">
                                        <p className='Popins-medium font-twenty'>You are almost there to start your dream business</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 offset-md-3 mt-4">
                                        <p className='Popins-semibold font-twenty'>Enter the OTP send to your phone</p>
                                        <input type="text" className=' w-100 rounded-1 otp-placeholder p-2' placeholder='Enter OTP code' onChange={(e) => setOtp(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-md-4 mt-3 offset-md-2 ">
                                        <Button variant="dark" onClick={() => { handlePrevious(); prevStep(); }} className=' w-100 Popins-semibold font-eighteen Opacity-map'>
                                            Previous
                                        </Button>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <Button variant="primary" className='w-100 Popins-semibold font-eighteen Opacity-map bg-primary py-2' onClick={verifyOtp}>
                                            VERIFY & SUBMIT
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <div className="row ">
                                    <div className="col bg-linear py-2 ">
                                        <p className='Popins-medium font-twenty mb-0'>Your request has been successfully submitted</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-10 offset-1">
                                        <p className='Popins-semibold font-twentyeight text-center mb-0'>Thank you for you interest starting business in United Arab Emirates,
                                            one of our agent will get back to you soon with cost estimation!</p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-5 Opacity-map">

                                    <Link to="/" className='w-25 Popins-semibold border bg-primary text-white rounded p-2 text-center'>
                                        {"<"} BACK TO WEBSITE
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>

        </div>
    );
};

export default CostCalCompo;
