import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Footer.css';
import Form from 'react-bootstrap/Form';
const AskQuestion = () => {

    const [askName, setAskName] = useState(" ");
    const [askNumber, setAskNumber] = useState(" ");
    const [askEmail, setAskEmail] = useState(" ");
    const [askSelect, setAskSelect] = useState(" ");
    const [askMessage, setAskMessage] = useState(" ");
    const handleAskName = async (e) => {
        e.preventDefault();
        try {
            const askresponse = await axios.post("http://localhost:3000/send", {
                name: askName,
                number:askNumber,
                email:askEmail,
                select:askSelect,
                message:askMessage,
            });
            console.log('Response', askresponse.data);
        } catch (err) {
            console.log("Error:", err);
        }

    }
    return (
        <div className="ask-question-background">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-5 offset-md-1">
                        <p className='AqFirst'>Contact us today for assistance</p>
                        <p className='AqSecond'>GIVE US A CALL OR </p>
                        <p className='AqThird'>SEND US A MESSAGE.</p>
                        <p className='AqFourth'>Have any Question?</p>
                        <p className='AqFifth'>Call us:</p>
                        <p className='AqSixth'>+971 52 132 5769</p>
                        <p className='AqSeventh'>Write Email</p>
                        <p className='AqEight'>info@bizlantic.com</p>
                        <p className='AqNinth'>Visit anytime:</p>
                        <p className='AqTenth'>Business Bay, Bay Square - Dubai, UAE</p>
                    </div>
                    <div className="col-md-5 border shadow Askquestion-form-main py-4 px-4 bg-white rounded">
                        <p className='Askquestion-form-label'>Let’s Get You Started</p>
                        <Form onSubmit={handleAskName}>
                            <div className="row ">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            value={askName}
                                            onChange={(e) => setAskName(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter your number" 
                                        value={askNumber}
                                        onChange={(e)=>setAskNumber(e.target.value)}
                                        required
                                        />
                                    </Form.Group>
                                </div>

                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control 
                                        type="email" 
                                        placeholder="Enter your email ID" 
                                        value={askEmail}
                                        onChange={(e)=>setAskEmail(e.target.value)}
                                        required
                                        />
                                    </Form.Group>
                                </div>

                                <div className="col-md-6">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Choose Your Services Type</Form.Label>
                                        <Form.Select
                                         value={askSelect}
                                         onChange={(e)=>setAskSelect(e.target.value)}
                                         required
                                        >
                                            <option value="" className='Popins-medium'>Please select an option</option>
                                            <option value="Client" className='Popins-light'>Client</option>
                                            <option value="Agent" className='Popins-light'>Agent</option>                                            
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>

                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Type your message" 
                                value={askMessage}
                                onChange={(e)=>setAskMessage(e.target.value)}
                                required
                                />
                            </Form.Group>

                            <div className="d-grid">
                                <button className='btn btn-primary btn-lg' type='submit'>Send</button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AskQuestion;

