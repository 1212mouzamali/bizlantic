import React from "react";
import Whitelogo from '../assets/Whitelogo.png';
import './Footer.css';
const Footer = () => {
    return (
        < div className="bg-dark text-white">
            <div className="container pt-5">
                <div className="row footer-links">
                    <div className="col-md-2 mt-2">
                        <ul>
                            <label>Business Setup</label>
                            <li><a href="#">Freezone License</a></li>
                            <li><a href="#">Mainland License</a></li>
                            <li><a href="#">Offshore License</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2  mt-2">
                        <ul>
                            <label>Finance Service</label>
                            <li><a href="#">Corporate Tax</a></li>
                            <li><a href="#">VAT Resgistration</a></li>
                            <li><a href="#">Bank Account Assist</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2  mt-2">
                        <ul>
                            <label>Residence</label>
                            <li><a href="#">Golden Visa</a></li>
                            <li><a href="#">Citizenship</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2  mt-2">
                        <ul >
                            <label> Digital</label>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Social Media Management</a></li>
                            <li><a href="#">Website & App Development</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2  mt-2">
                        <ul>
                            <label> Info</label>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Our Blog</a></li>
                        </ul>

                    </div>
                    <div className="col-md-2  mt-2">
                        <ul>
                            <label> Legal</label>
                            <li><a href="#">Term & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>

                        </ul>
                    </div>
                </div>
                <hr className="about-hr" />
                <div className="row my-5">
                    <div className="col-1"></div>
                    <div className="col-md-5 d-flex">
                        <div className="">
                            <div className="home-white-logo-img">
                            <img src={Whitelogo} alt="" className="Whitelogo" />
                            </div>
                            
                            <p className="footer-num-mail mt-3 ">00971 4123 4567 | info@bizlantic.com</p>
                            <div className="home-login-btn">
                                <button className="btn btn-primary">Login or Register</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-md-4 footer-connect-us d-flex justify-content-center my-4">
                        <div>
                            <p className="text-center">Connect with Us</p>
                            <a href="#"><i class="bi bi-whatsapp bg-primary rounded p-2"></i></a>
                            <a href="#"> <i class="bi bi-facebook bg-primary rounded p-2 mx-2"></i></a>
                            <a href="#">  <i class="bi bi-instagram bg-primary rounded p-2"></i></a>
                            <a href="#"> <i class="bi bi-linkedin bg-primary rounded p-2 mx-2"></i></a>
                            <a href="#"><i class="bi bi-youtube bg-primary rounded p-2"></i></a>
                        </div>



                    </div>
                </div>
                <hr  className="about-hr"/>
                <div className="row">
                    <div className="col-2 offset-1 ">
                        <p className="footer-data ">©2025 REGISTERED BIZLANTIC TECH</p>
                    </div>
                    <div className="col-2">
                        <p className="footer-data">ALL RIGHTS RESERVED </p>

                    </div>
                    <div className="col-2">
                        <p className="footer-data"> COMPANY NO: 1146883</p>
                    </div>    

                    <div className="col-2 offset-md-3">
                        <p className="footer-data">REVOLUTIONIZED BY <a href="https://nexupdigital.com/digital-marketing/">NEXUP DIGITAL</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;