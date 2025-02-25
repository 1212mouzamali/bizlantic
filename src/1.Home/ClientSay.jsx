import React from "react";
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ClientSay = () => {
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
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 learn-slick">
                        <p className='learn-more'> WHAT OUR <span > CLIENTS SAY  </span> </p>
                        <Slider {...settings}>
                            <div >
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Text className="client-say-first-card">
                                            Bizlantic helped me set up my
                                            business in the UAE with ease. Their
                                            expert consultants guide through
                                            every step, ensuring a smooth
                                            process. Highly recommended!
                                            <p className="text-end">Fatima M.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Text className="client-say-first-card">
                                            The team at Bizlantic provided
                                            excellent guidance and support in
                                            establishing my company. Their
                                            expertise in UAE business setup is
                                            unmatched. Truly grateful!
                                            <p className="text-end">Fatima M.</p>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '20rem' }} className='shadow'>
                                    <Card.Body>
                                        <Card.Text className="client-say-first-card">
                                            I had a fantastic experience working
                                            with Bizlantic. Their professionals
                                            made the business setup process
                                            simple and straightforward. I highly
                                            recommend their services.
                                            <p className="text-end">Fatima M.</p>
                                        </Card.Text>

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

export default ClientSay;