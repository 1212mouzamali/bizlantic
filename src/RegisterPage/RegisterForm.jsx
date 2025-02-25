import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Burjimg from '../assets/Burjimg.jpg';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
    return (
        <div>
            <Row className="justify-content-center my-4">
                <Col md={8}>
                    <Card className="d-flex flex-row align-items-center">
                        <Card.Img
                            src={Burjimg}
                            style={{ width: '40%', height: '100%', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>Register</Card.Title>
                            <Card.Text>
                                <Form >
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>First Name </Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email ID" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email ID" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Your Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email ID" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Mobile Number</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email ID" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Date of Birth</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email ID" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email ID" />
                                            </Form.Group>
                                        </div>
                                        <button className="btn btn-primary w-100 mt-3">Login {'>'}</button>
                                        <div className='d-flex justify-content-around mt-3'>
                                            <button className="btn btn-dark"  >Register {'>'}</button>
                                            <button className="btn btn-dark">Forgot Pass {'?'}</button>
                                        </div>
                                    </div>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default RegisterForm;