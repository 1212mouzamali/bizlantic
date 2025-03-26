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
                    <div className="col-lg-10 offset-lg-1 ">
                        <p className="AqFirst">Want to get latest update?</p>
                        <p className="newsletter-subscribe-heading">SUBSCRIBE TO <span >OUR NEWSLETTER</span></p>
                        <p className="Help">Subscribe to our newsletter for the latest updates on UAE laws, government regulations, and industry insights. Receive expert tips
                            and essential information directly to your inbox to stay informed and compliant. </p>

                        <div className="row newsletter-form-bg">
                            <div className="col-lg-9">
                                <Form className="subscribe-btn" onSubmit={handleSubscribe}>
                                    <Form.Group controlId="exampleForm.ControlInput1 " >
                                        <Form.Control className="newsletter-input"
                                            type="email"
                                            placeholder="Enter your email address..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />

                                    </Form.Group>
                                </Form>
                            </div>

                            <div className="col-lg-3 mt-3 mt-lg-0">
                                <button className="rounded py-1 newsletter-subscribe-button w-100" type="submit">SUBSCRIBE{'>'}</button>
                            </div>
                            {message && <p className="text-dark mb-0">{message}</p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Newsletter;