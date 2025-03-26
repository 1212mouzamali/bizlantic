import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Gradientlogo from '../assets/Gradientlogo.png';
import Select from "react-select";
import { countries } from "countries-list";
import './Register.css';

const RegisterForm = () => {
    const [key, setKey] = useState('home');
    const [regFormComponent, setRegFormComponent] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [otp, setOtp] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agentData, setAgentData] = useState({});
    const [clientData, setClientData] = useState({});


    const prevregFormComponent = () => registerOtpComponent(regFormComponent - 1);
    const nextregOtpComponent = () => registerOtpComponent(regFormComponent + 1);


    const countryOptions = Object.entries(countries).map(([code, country]) => ({
        value: country.name,
        label: country.name,
    }));

    // Handle form input changes
    const handleAgentChange = (e) => {
        setAgentData({ ...agentData, [e.target.name]: e.target.value });
    };
    const handleClientChange = (e) => {
        setClientData({ ...clientData, [e.target.name]: e.target.value });
    };

    // Send OTP
    const sendOtp = async (phoneNumber) => {
        try {
            const response = await axios.post('http://localhost:3000/send-otp', { phoneNumber });
            if (response.data.success) {
                alert('OTP sent successfully!');
                setRegFormComponent(1); // Move to OTP verification step
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
            const response = await axios.post('http://localhost:3000/verify-otp', { phoneNumber, otp });
            if (response.data.success) {
                if (key === 'home') {
                    await clientdata(); // Save client data
                    window.location.href = '/usermain'; // Redirect to UserMain
                } else {
                    await agentdata(); // Save agent data
                    window.location.href = '/agentmain'; // Redirect to AgentMain
                }
            } else {
                alert('Invalid OTP');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('Error verifying OTP');
        }
    };
    const handleAgentSubmit = async (e) => {
        e.preventDefault();
        setPhoneNumber(agentData.number); // Save phone number for OTP
        await sendOtp(agentData.number); // Send OTP
        await agentdata(); // Save agent data
    };

    const handleClientSubmit = async (e) => {
        e.preventDefault();
        setPhoneNumber(clientData.number); // Save phone number for OTP
        await sendOtp(clientData.number); // Send OTP
        await clientdata(); // Save client data
    };

    const agentdata = async () => {
        try {
            if (!selectedCountry) {
                alert('Please select a country');
                return;
            }
            const response = await axios.post('http://localhost:3000/save-agent-data', {
                ...agentData,
                agentNationality: selectedCountry.value,
                agentServiceType: agentData.agentServiceType,
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
    const clientdata = async () => {
        try {
            if (!selectedCountry) {
                alert('Please select a country');
                return;
            }
            const response = await axios.post('http://localhost:3000/save-client-data', {
                ...clientData,
                clientNationality: selectedCountry.value,
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
        <div className='bg-linear'>
            {regFormComponent === 0 && (
                <div>
                    <div className="container ">
                        <div className="row ">
                            <div className="col-lg-6 offset-lg-3 mt-5 bg-white px-md-4 py-5 rounded-2 shadow">

                                <div className='text-center'>
                                    <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
                                </div>
                                <p className='Popins-semibold fs-6 text-center mt-2'>Sign up into your account</p>

                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-4 mt-5 register-tab"

                                >
                                    <Tab eventKey="home" title="Business Owner" >
                                        <Form onSubmit={handleClientSubmit}>
                                            <div className="row ">
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>First Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter your name"
                                                            className='register-form-input'
                                                            name="firstName"
                                                            onChange={handleClientChange}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Last Name</Form.Label>
                                                        <Form.Control type="text"
                                                            placeholder="Enter your name"
                                                            className='register-form-input'
                                                            name="lastName"
                                                            onChange={handleClientChange}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Email</Form.Label>
                                                        <Form.Control type="email"
                                                            placeholder="yourname@email.com"
                                                            className='register-form-input'
                                                            name="email"
                                                            onChange={handleClientChange}
                                                        />
                                                    </Form.Group>
                                                </div>

                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Mobile Number</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            placeholder="123 456 789"
                                                            className='register-form-input'
                                                            name="number"
                                                            onChange={handleClientChange}
                                                        />
                                                    </Form.Group>
                                                </div>

                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3 ">
                                                        <Form.Label className='register-form-input-labels '>Nationality</Form.Label>
                                                        <Select
                                                            options={countryOptions}
                                                            value={selectedCountry}
                                                            onChange={setSelectedCountry}
                                                            placeholder="Select your nationality"
                                                            className='nationality-select'
                                                            name="clientNationality"

                                                        />
                                                    </Form.Group>
                                                </div>

                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="**********"
                                                            className='register-form-input'
                                                            name="password"
                                                            onChange={handleClientChange}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Confirm Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="**********"
                                                            className='register-form-input'
                                                            name="confirmPassword"
                                                            onChange={handleClientChange}
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="row justify-content-evenly mt-3">
                                                <div className="col-md-6">
                                                    <button className='btn btn-primary Popins-semibold register-form-btn w-100 mt-3' type='submit'>Sign UP {">"}</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <Link to="/login" className='btn btn-dark  Popins-semibold register-form-btn w-100 mt-3'>Login {"?"}</Link>
                                                </div>
                                            </div>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="profile" title="Service Agency" >
                                        <Form onSubmit={handleAgentSubmit}>
                                            <div className="row ">
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>First Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter your name"
                                                            className='register-form-input'
                                                            name="firstName"
                                                            onChange={handleAgentChange}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter your name"
                                                            className='register-form-input'
                                                            name="lastName"
                                                            onChange={handleAgentChange}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Email ID</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="yourname@email.com"
                                                            className='register-form-input'
                                                            name="email"
                                                            onChange={handleAgentChange}
                                                        />
                                                    </Form.Group>
                                                </div>

                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Mobile Number</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            placeholder="123 456 789"
                                                            className='register-form-input'
                                                            name="number"
                                                            onChange={handleAgentChange}
                                                        />
                                                    </Form.Group>
                                                </div>

                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Nationality</Form.Label>
                                                        <Select
                                                            options={countryOptions}
                                                            value={selectedCountry}
                                                            onChange={(selectedOption) => {
                                                                setSelectedCountry(selectedOption);
                                                                if (key === 'home') {
                                                                    setClientData({ ...clientData, clientNationality: selectedOption.value });
                                                                } else {
                                                                    setAgentData({ ...agentData, agentNationality: selectedOption.value });
                                                                }
                                                            }}
                                                            placeholder="Select your nationality"
                                                            className='nationality-select'
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Cmpany Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter company name"
                                                            className='register-form-input'
                                                            name="agentCompanyName"
                                                            onChange={handleAgentChange}
                                                        />
                                                    </Form.Group>
                                                </div>


                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className='register-form-input-labels'>Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="**********"
                                                            className='register-form-input'
                                                            name="password"
                                                            onChange={handleAgentChange}
                                                        />
                                                    </Form.Group>
                                                </div>

                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className=' register-form-input-labels'>Confirm Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="**********"
                                                            className='register-form-input'
                                                            name="confirmPassword"
                                                            onChange={handleAgentChange}

                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className=' register-form-input-labels'>City</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Select your city"
                                                            className='register-form-input'
                                                            onChange={handleAgentChange}
                                                            value={agentData.name}
                                                            name='agentCity'
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className=' register-form-input-labels '>Choose Your Services Type</Form.Label>
                                                        <Form.Select className='register-form-option'

                                                            onChange={handleAgentChange}
                                                            value={agentData.name}
                                                            name='agentServiceType'

                                                        >
                                                            <option >Select your service type</option>
                                                            <option value="Client">Client</option>
                                                            <option value="Agent">Agent</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="row justify-content-evenly mt-3">
                                                <div className="col-md-6">
                                                    <button className='btn btn-primary Popins-semibold register-form-btn w-100 mt-3' type='submit'>Sign UP {">"}</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <Link to="/login" className='btn btn-dark  Popins-semibold register-form-btn w-100 mt-3'>Login {"?"}</Link>
                                                </div>
                                            </div>
                                        </Form>
                                    </Tab>
                                </Tabs>


                            </div>
                            <div className="row  my-3 ">
                                <div className="col-md-3 offset-md-5">
                                    <Link to="/" className='btn btn-dark  Popins-semibold register-form-btn w-100'> BACK TO WEBSITE </Link>
                                </div>
                                <div className="col-md-5"></div>
                            </div>

                        </div>

                    </div>

                </div>


            )}
            {regFormComponent === 1 && (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 mt-5 py-4  rounded-2 shadow bg-white">

                                <div className='text-center'>
                                    <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
                                </div>
                                <p className='Popins-semibold fs-6 text-center mt-2'>Sign up into your account</p>

                                <div>
                                    <p className='register-form-input-labels'>Enter the OTP send to your phone:</p>
                                    <input
                                        type="text"
                                        placeholder='Enter OTP'
                                        className='register-form-input w-100 rounded p-2  form-control'
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}

                                    />
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <button className='btn btn-primary Popins-semibold register-form-btn w-100 mt-3' onClick={verifyOtp}>VERIFY OTP {">"}</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className='btn btn-dark  Popins-semibold register-form-btn w-100 mt-3' onClick={() => setRegFormComponent(0)}>BACK {"?"}</button>
                                    </div>
                                </div>
                            </div>

                            <div className="row  my-3 ">
                                <div className="col-md-3 offset-md-5">
                                    <Link to="/" className='btn btn-dark  Popins-semibold register-form-btn w-100'> BACK TO WEBSITE </Link>
                                </div>
                                <div className="col-md-5"></div>
                            </div>

                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default RegisterForm;