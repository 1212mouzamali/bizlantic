import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import './Footer.css';
const Newsletter = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/subscribe", { email });
            setMessage(response.data.message);
            setEmail(""); // Clear input after success
        } catch (error) {
            setMessage(error.response?.data?.message || "Subscription failed");
        }
    };

    return (
        <div className="news-background">
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <p className="newsletter-subscribe-heading">SUBSCRIBE TO <span >OUR NEWSLETTER</span></p>
                        <p className="newsletter-subscribe-para">Subscribe to our newsletter for the latest updates on UAE laws, government regulations, and industry insights. Receive expert tips
                            and essential information directly to your inbox to stay informed and compliant. </p>

                        <div className=" newsletter-form-bg">
                            <Form className="subscribe-btn" onSubmit={handleSubscribe}>
                                <Form.Group className=" d-flex" controlId="exampleForm.ControlInput1 " >
                                    <Form.Control 
                                    type="email" 
                                    placeholder="Enter your email address..."                                  
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                    />
                                    <button className="btn btn-dark  newsletter-subscribe-button" type="submit">SUBSCRIBE{'>'}</button>
                                </Form.Group>
                            </Form> 
                            {message && <p className="text-info">{message}</p>}                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletter;