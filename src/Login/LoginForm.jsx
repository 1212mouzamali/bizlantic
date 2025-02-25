import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Login.css';
import Burjimg from '../assets/Burjimg.jpg';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const LoginForm = () => {
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
                            <Card.Title>Login</Card.Title>
                            <Card.Text>
                                <Form >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email ID" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Your Password</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your password" />
                                        <button className="btn btn-primary w-100 mt-3">Login {'>'}</button>
                                        <div className='d-flex justify-content-around mt-3'>
                                            <Link to="/register" className="btn btn-dark">Register {'>'}</Link>
                                            <button className="btn btn-dark">Forgot Pass {'?'}</button>
                                        </div>

                                    </Form.Group>

                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>



    );
};

export default LoginForm;