import React from "react";
import Form from 'react-bootstrap/Form';
import './Footer.css';
const Newsletter = () => {
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
                            <Form className="subscribe-btn">
                                <Form.Group className=" d-flex" controlId="exampleForm.ControlInput1 " >
                                    <Form.Control type="email" placeholder="Enter your email address..." />
                                    <button className="btn btn-dark  newsletter-subscribe-button">SUBSCRIBE{'>'}</button>
                                </Form.Group>

                            </Form>
                            
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default Newsletter;