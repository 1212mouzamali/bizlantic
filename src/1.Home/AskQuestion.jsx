import React from 'react';
import './Footer.css';
import Form from 'react-bootstrap/Form';
const AskQuestion = () => {
    return (
        <div className="ask-question-background">
            <div className="container ">
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <p className='AqFirst'>Having a question?</p>
                        <p className='AqSecond'>GIVE US A CALL OR </p>
                        <p className='AqThird'>SEND US A MESSAGE.</p>
                        <p className='AqFourth'>Have any Question?</p>
                        <p className='AqFifth'>Call us:</p>
                        <p className='AqSixth'>+971 52 132 5769</p>
                        <p className='AqSeventh'>Write Email</p>
                        <p className='AqEight'>info@bizlantic.com</p>
                        <p className='AqNinth'>Visit anytime:</p>
                        <p className='AqTehth'>Business Bay, Bay Square - Dubai, UAE</p>
                    </div>
                     <div className="col-sm-5 border shadow Askquestion-form-main py-4">
                        <p className='Askquestion-form-label'>Let’s Get You Started</p>
                        <Form>
                        <div className="row">
                            <div className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>
                            </div>

                            <div className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your number" />
                                </Form.Group>
                            </div>

                            <div className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email ID" />
                                </Form.Group>
                            </div>

                            <div className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Choose Your Services Type</Form.Label>
                                    <Form.Select>
                                        <option>Please select an option</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Type your message" />
                        </Form.Group>

                        <div className="d-grid">
                            <button className='btn btn-primary btn-lg'>Send</button>
                        </div>
                    </Form>
                    </div> 

                </div>
            </div>
        </div>
    );
};

export default AskQuestion;

