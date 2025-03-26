import React from "react";
import { Link } from 'react-router-dom';
import Whitelogo from '../assets/Whitelogo.png';
import './Footer.css';
const Footer = () => {
    return (
        < div className=" text-white footer-main">
            <div className="container  pt-5">
                <div className="row footer-links">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row  ">
                            <div className="col-lg-2 mt-2">
                                <ul className="px-0 text-center text-lg-start">
                                    <label className="footer-links-labels ">Business Setup</label>
                                    <li className="mt-2"><Link to="/freezone" >Freezone License</Link></li>
                                    <li><Link to="/mainmain">Mainland License</Link></li>
                                    <li><Link to="/offshore">Offshore License</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2  mt-2 ">
                                <ul className="px-1 text-center text-lg-start">
                                    <label className="footer-links-labels">Finance Service</label>
                                    <li className="mt-2"><Link to="/corporatemain">Corporate Tax</Link></li>
                                    <li><Link to="/vatmain">VAT Registration</Link></li>
                                    <li><Link to="/bankmain">Bank Assistance</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2  mt-2">
                                <ul className="px-1 text-center text-lg-start">
                                    <label className="footer-links-labels">Residence</label>
                                    <li className="mt-2"><Link to="/goldmain">Golden Visa</Link></li>
                                    <li><Link to="/citymain">Citizenship</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-2  mt-2 px-0">
                                <ul className="px-1 text-center text-lg-start">
                                    <label className="footer-links-labels"> Digital</label>
                                    <li className="mt-2"><Link to="/digitalmain">Digital Marketing</Link></li>
                                    <li><Link to="/socialmain">Social Management</Link></li>
                                    <li><Link to="/webmain">Website & App Dev.</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-2  mt-2 px-0">
                                <ul className="px-1 text-center text-lg-start">
                                    <label className="footer-links-labels"> Info</label>
                                    <li className="mt-2"><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/blog">Our Blog</Link></li>
                                </ul>

                            </div>
                            <div className="col-lg-2  mt-2">
                                <ul className="px-1 text-center text-lg-start">
                                    <label className="footer-links-labels"> Legal</label>
                                    <li className="mt-2"><Link to="/terms">Terms & Condition</Link></li>
                                    <li><Link to="/privacy" >Privacy Policy</Link></li>
                                    <li><Link to="/faq" >FAQs</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="row">
                    <div className="col-lg-10 about-hr offset-lg-1">
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-1"></div>
                    <div className="col-md-5 d-flex">
                        <div className="">
                            <div className="home-white-logo-img">
                                <img src={Whitelogo} alt="" className="Whitelogo" />
                            </div>

                            <p className="footer-num-mail mt-3 ">00971 4123 4567 | info@bizlantic.com</p>
                            <div className="home-login-btn">
                                <Link to="/register" className="btn btn-primary Popins-regular">Login or Register</Link>
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
                <div className="row">
                    <div className="col-lg-10 about-hr offset-lg-1">
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-10 offset-md-1">
                        <div className="row">
                            <div className="col-md-3 px-0 text-center  ">
                                <p className="footer-data mb-0">©2025 REGISTERED BIZLANTIC TECH LLC </p>
                            </div>
                            <div className="col-md-4 d-flex px-0 justify-content-center">
                                <p className="footer-data mb-0">ALL RIGHTS RESERVED  </p>
                                <p className="px-2 fs-4 "></p>
                                <p className="footer-data mb-0"> COMPANY NO: 1146883 </p>
                            </div>


                            <div className="col-md-3 px-0 text-center text-md-end offset-md-2">
                                <p className="footer-data">REVOLUTIONIZED BY
                                    <a className="text-white" href="https://nexupdigital.com/digital-marketing/">
                                        NEXUP DIGITAL LLC
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;