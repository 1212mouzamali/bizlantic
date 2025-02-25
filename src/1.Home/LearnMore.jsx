import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Burjimg from '../assets/Burjimg.jpg';

const LearnMore = () => {

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 748, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='learn-main'>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <p className='learn-more text-center'> LEARN MORE  <span >  WITH OUR BLOG </span> </p>
                    <div className="col-10 learn-slick">
                        <Slider {...settings}>
                            <div >
                                <Card style={{ width: '20rem' }} className='shadow'>
                                    <Card.Img variant="top" src={Burjimg} />
                                    <Card.Body>
                                        <Card.Title>Golden Visa</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <div className='text-center'>
                                            <Button variant="primary">Read More {'>'}</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '20rem' }} className='shadow'>
                                    <Card.Img variant="top" src={Burjimg} />
                                    <Card.Body>
                                        <Card.Title>Citizenship</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '20rem' }} className='shadow'>
                                    <Card.Img variant="top" src={Burjimg} />
                                    <Card.Body>
                                        <Card.Title>Corp. Tax & VAT
                                        </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Slider>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default LearnMore;