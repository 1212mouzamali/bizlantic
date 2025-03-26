import React from 'react';
import { useState } from 'react';
import Gradientlogo from '../assets/Gradientlogo.png';
import './Login.css';
import '../RegisterPage/Register.css';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [loginStep, setLoginStep] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            if (response.data.success) {
                navigate('/usermain'); // Navigate to UserMain on successful login
            } else {
                setErrorMessage('Invalid email or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred during login');
        }
    };

    // Handle password reset confirmation
    const handlePasswordResetConfirm = async () => {
        if (newPassword !== confirmNewPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/send-otp-login-form', { phoneNumber });
            if (response.data.success) {
                setLoginStep(2); // Move to OTP verification step
            } else {
                setErrorMessage('Failed to send OTP');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            setErrorMessage('An error occurred while sending OTP');
        }
    };

    // Handle OTP verification and password update
    const handleOtpVerification = async () => {
        try {
            const response = await axios.post('http://localhost:3000/verify-otp-and-update-password', {
                mobileNumber,
                newPassword,
                otp,
            });
            if (response.data.success) {
                alert('Password updated successfully!');
                setLoginStep(0); // Return to login step
            } else {
                setErrorMessage('Invalid OTP or failed to update password');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setErrorMessage('An error occurred during OTP verification');
        }
    };

    return (
        <div className='bg-linear'>
            {loginStep === 0 && (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 bg-white mt-5 py-5 px-5 rounded-2 shadow">
                                <div className='text-center'>
                                    <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
                                </div>
                                <p className='Popins-semibold fs-6 text-center mt-2'>Sign in to your account</p>
                                {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
                                <Form onSubmit={handleLogin}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label className='register-form-input-labels'>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email ID"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className='register-form-input'
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label className='register-form-input-labels'>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className='register-form-input'
                                        />
                                    </Form.Group>
                                    <button className="btn btn-primary w-100 mt-3 font-twenty Popins-semibold" type="submit">Login {'>'}</button>
                                </Form>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <Link to="/register" className="btn btn-primary w-100 Popins-semibold mt-3">Register {'>'}</Link>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn btn-dark Popins-semibold w-100 mt-3" onClick={() => setLoginStep(1)}>Forgot Password {'?'}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-2 offset-md-5 py-2 my-5">
                                <Link to="/" className='btn btn-dark  Popins-semibold register-form-btn w-100'> BACK TO WEBSITE </Link>
                            </div>
                            <div className="col-md-5"></div>
                        </div>
                    </div>
                </div>
            )}

            {loginStep === 1 && (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 mt-5 rounded-3 shadow bg-white py-5 px-5">
                                <div className='text-center'>
                                    <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
                                </div>
                                <p className='Popins-semibold fs-6 text-center mt-2'>Reset your password</p>
                                {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
                                <Form>
                                    <Form.Group className="mb-3" controlId="formMobileNumber">
                                        <Form.Label className='Popins-medium'>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter your mobile number"
                                            value={mobileNumber}
                                            onChange={(e) => setmobileNumber(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formNewPassword">
                                        <Form.Label className='Popins-medium'>New Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your new password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                                        <Form.Label className='Popins-medium'>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm your new password"
                                            value={confirmNewPassword}
                                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <button className="btn btn-primary w-100 Popins-medium fs-5" onClick={handlePasswordResetConfirm}>Confirm</button>
                                </Form>
                            </div>
                        </div>
                        <div className="row  my-3 ">
                            <div className="col-md-2 offset-md-5 my-5">
                                <Link to="/" className='btn btn-dark  Popins-semibold register-form-btn w-100'> BACK TO WEBSITE </Link>
                            </div>
                            <div className="col-md-5"></div>
                        </div>
                    </div>
                </div>
            )}

            {loginStep === 2 && (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 my-5 rounded-3 shadow bg-white py-5">
                                <div className='text-center'>
                                    <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
                                </div>
                                <p className='Popins-semibold fs-6 text-center mt-2'>Enter OTP sent to your phone</p>
                                {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
                                <Form>
                                    <Form.Group className="mb-3" controlId="formOtp">
                                        <Form.Label className='Popins-medium'>Enter OTP</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter OTP here"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <button className="btn btn-primary w-100 Popins-medium fs-5" onClick={handleOtpVerification}>Verify OTP</button>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginForm;










// import React from 'react';
// import { useState } from 'react';
// import Gradientlogo from '../assets/Gradientlogo.png';
// import './Login.css';
// import '../RegisterPage/Register.css';
// import Form from 'react-bootstrap/Form';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginForm = () => {

//     //this is the portion for login steps
//     //this is the portion for login steps
//     const [loginStep, setloginStep] = useState(0);
//     const nextloginStep = () => setloginStep(loginStep + 1)
//     const prevloginStep = () => setloginStep(loginStep - 1)
//     //this is the portion for login steps
//     //this is the portion for login steps
//     const bizAdmin = "biz@gmail.com";
//     const bizAdminPass = "12345"
//     const [adminlogName, setadminlogName] = useState("");
//     const [adminlogPassword, setadminlogPassword] = useState("");
//     const navigate = useNavigate();
//     const handleAdmin = (e) => {
//         e.preventDefault();
//         if (adminlogName === bizAdmin && adminlogPassword === bizAdminPass) {
//             console.log("login Successfull");
//             navigate("/adminmain/");
//         } else {
//             console.log("Invalid email or password");
//             alert("Invalid email or password");
//         }
//     }
//     return (
//         <div className='bg-linear'>

//             {loginStep === 0 && (
//                 <div>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-6 offset-md-3 bg-white my-5 py-5 px-5 rounded-2 shadow">

//                                 <div className='text-center'>
//                                     <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
//                                 </div>
//                                 <p className='Popins-semibold fs-6 text-center mt-2'>Sign up into your account</p>

//                                 <div>
//                                     <Form onSubmit={handleAdmin}>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                             <Form.Label className='register-form-input-labels'>Email address</Form.Label>
//                                             <Form.Control
//                                                 type="email"
//                                                 placeholder="Enter your email ID"
//                                                 value={adminlogName}
//                                                 onChange={(e) => setadminlogName(e.target.value)}
//                                                 required
//                                                 className='register-form-input'
//                                             />
//                                         </Form.Group>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                             <Form.Label className='register-form-input-labels'>Your Password</Form.Label>
//                                             <Form.Control
//                                                 type="password"
//                                                 placeholder="Enter your password"
//                                                 value={adminlogPassword}
//                                                 onChange={(e) => setadminlogPassword(e.target.value)}
//                                                 className='register-form-input'
//                                             />
//                                         </Form.Group>
//                                         <button className="btn btn-primary w-100 mt-3 font-twenty Popins-semibold" type="submit" >Login {'>'}</button>

//                                     </Form>
//                                 </div>
//                                 <div className="row mt-3">
//                                     <div className="col-md-6">
//                                         <Link to="/register" className="btn btn-primary w-100 Popins-semibold mt-3">Register {'>'}</Link>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <button className="btn btn-dark Popins-semibold w-100 mt-3" onClick={nextloginStep}>Forgot Pass {'?'}</button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row  my-3 ">
//                                 <div className="col-md-3 offset-md-5">
//                                     <Link to="/" className='btn btn-dark  Popins-semibold register-form-btn w-100'> BACK TO WEBSITE </Link>
//                                 </div>
//                                 <div className="col-md-5"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {loginStep === 1 && (
//                 <div>
//                     <div className="container ">
//                         <div className="row">
//                             <div className="col-md-6 offset-md-3 my-5  rounded-3 shadow bg-white py-5">

//                                 <div className='text-center'>
//                                     <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
//                                 </div>
//                                 <p className='Popins-semibold fs-6 text-center mt-2'>Repair your password</p>

//                                 <div>
//                                     <Form >
//                                         <div className="row">
//                                             <div className="col-md-10 offset-md-1">
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label className='Popins-medium'>Mobile Number</Form.Label>
//                                                     <Form.Control
//                                                         type="number"
//                                                         placeholder="Enter your mobile number"

//                                                     />
//                                                 </Form.Group>
//                                             </div>

//                                             <div className="col-md-10 offset-md-1">
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label className='Popins-medium'>New Password</Form.Label>
//                                                     <Form.Control
//                                                         type="password"
//                                                         placeholder="Enter your new password"

//                                                     />
//                                                 </Form.Group>
//                                             </div>

//                                             <div className="col-md-10 offset-md-1">
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label className='Popins-medium'>Confirm Password</Form.Label>
//                                                     <Form.Control
//                                                         type="password"
//                                                         placeholder="Confirm Password"

//                                                     />
//                                                 </Form.Group>
//                                             </div>

//                                         </div>
//                                     </Form>
//                                     <div className="col-md-10 offset-md-1">
//                                         <button className='btn btn-primary w-100 Popins-medium fs-5' onClick={nextloginStep}>Confirm</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {loginStep === 2 && (
//                 <div>
//                     <div className="container ">
//                         <div className="row">
//                             <div className="col-md-6 offset-md-3 my-5  rounded-3 shadow bg-white py-5">

//                                 <div className='text-center'>
//                                     <img src={Gradientlogo} alt="Bizlantic Gradient Logo" className='w-50' />
//                                 </div>
//                                 <p className='Popins-semibold fs-6 text-center mt-2'>Enter OTP here which has been sent to your phone</p>

//                                 <div>
//                                     <Form >
//                                         <div className="row">
//                                             <div className="col-md-10 offset-md-1">
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label className='Popins-medium'>Enter OTP</Form.Label>
//                                                     <Form.Control
//                                                         type="number"
//                                                         placeholder="Enter OTP here"

//                                                     />
//                                                 </Form.Group>
//                                             </div>

//                                             <div className="col-md-10 offset-md-1">
//                                                 <button className='btn btn-primary w-100 Popins-medium fs-5' onClick={nextloginStep}>Verif Otp</button>
//                                             </div>
//                                         </div>
//                                     </Form>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default LoginForm;







