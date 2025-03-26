import React from 'react';
import './Footer.css';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Burjimg from '../assets/Burjimg.jpg';
import { Link } from 'react-router-dom';

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

                    <div className="col-10 learn-slick">
                        <p className='LookDubai'>Get latest update</p>
                        <p className='OurServices-heading'> LEARN MORE  <span >  WITH OUR BLOG </span> </p>
                        <p className='Help'>Setting up a company in the UAE involves understanding different legal frameworks. At Bizlantic, we provide expert advice tailored to your business needs,
                            helping you navigate these complexities and align your company with its goals.</p>
                        <Slider {...settings}>
                            <div >
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={Burjimg} />
                                    <Card.Body>
                                        <Card.Title >Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <div className='text-center'>
                                            <Link variant="primary" className='services-card-detail rounded-1 px-5 py-1 d-block text-center'>Read More {'>'}</Link>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={Burjimg} />
                                    <Card.Body>
                                        <Card.Title>Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Link variant="primary" className='services-card-detail rounded-1 px-5 py-1 d-block text-center'>Read More {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={Burjimg} />
                                    <Card.Body>
                                        <Card.Title>Affordable Business Setup in Dubai: A Simple 5-Step Guide
                                        </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Link variant="primary" className='services-card-detail rounded-1 px-5 py-1 d-block text-center'>Read More {'>'}</Link>
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