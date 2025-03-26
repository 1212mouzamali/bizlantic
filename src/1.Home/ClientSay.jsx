import React from "react";
import './Footer.css';
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
                    <div className="col-lg-10 offset-lg-1">
                        <p className="learn-blue">It’s only the best</p>
                        <p className='learn-more'> WHAT OUR <span > CLIENTS SAY  </span> </p>
                        <Slider {...settings}>
                            <div>
                                <Card className="client-say-card-border " style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Card.Text className="client-say-first-card">
                                            <p className="Popins-bold mb-1">Amina AlFarsi - <span className="Popins-medium">Dubai Islamic Bank</span> </p>
                                            <p className="Popins-regular mb-0">Bizlantic helped me set up my business in the UAE with ease.
                                                Their expert consultants guided me through every step, ensuring a smooth process.
                                                Highly recommended!</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="client-say-card-border" style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Card.Text className="client-say-first-card">
                                            <p className="Popins-bold mb-1">Amina AlFarsi - <span className="Popins-medium">Dubai Islamic Bank</span> </p>
                                            <p className="Popins-regular mb-0">Bizlantic helped me set up my business in the UAE with ease.
                                                Their expert consultants guided me through every step, ensuring a smooth process.
                                                Highly recommended!</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="client-say-card-border" style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Card.Text className="client-say-first-card">
                                            <p className="Popins-bold mb-1">Amina AlFarsi - <span className="Popins-medium">Dubai Islamic Bank</span> </p>
                                            <p className="Popins-regular mb-0">Bizlantic helped me set up my business in the UAE with ease.
                                                Their expert consultants guided me through every step, ensuring a smooth process.
                                                Highly recommended!</p>
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