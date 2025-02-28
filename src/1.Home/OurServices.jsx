import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './StartJourney.css';
import Burjimg from '../assets/Burjimg.jpg'

const OurServices = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-md-1 ">
                        <p className='OurServices-heading' >OUR <span>SERVICES </span> </p>
                        <p className='OurServices-para'>Establishing your company in the UAE requires understanding diverse jurisdictions. With Paramount Zone, unlock your
                            company’s full potential. Our expert consultants provide tailored guidance,
                            ensuring alignment with your business goals.</p>
                    </div>
                    <div className="row text-center ">
                        <div className="col-md-3 offset-md-1 d-flex justify-content-center my-4">
                            <Card style={{ width: '18rem' }} className='shadow'>
                                <Card.Img variant="top" src={Burjimg} />
                                <Card.Body>
                                    <Card.Title>Freezone License</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Get Quotes</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center my-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Burjimg} />
                                <Card.Body>
                                    <Card.Title>Mainland License</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Get Quotes</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center my-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Burjimg} />
                                <Card.Body>
                                    <Card.Title>Offshore License</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Get Quotes</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="row text-center">                     
                        <div className="col-md-3 offset-md-1 d-flex justify-content-center my-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Burjimg} />
                                <Card.Body>
                                    <Card.Title>Golden Visa</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Get Quotes</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center my-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Burjimg} />
                                <Card.Body>
                                    <Card.Title>Citizenship</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Get Quotes</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center my-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Burjimg} />
                                <Card.Body>
                                    <Card.Title>Corp. Tax & VAT</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Get Quotes</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurServices;