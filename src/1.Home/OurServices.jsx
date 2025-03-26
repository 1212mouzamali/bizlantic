import React from 'react';
import Card from 'react-bootstrap/Card';
import './StartJourney.css';
import MainlandImg from '../assets/MainlandImg.png';
import FreezoneImg from '../assets/FreezoneImg.png';
import OffshoreImg from '../assets/OffshoreImg.png';
import GoldenVisaImg from '../assets/GoldenVisaImg.png';
import CitizenshipImg from '../assets/CitizenshipImg.png';
import CorpTaxImg from '../assets/CorpTaxImg.png';
import { Link } from 'react-router-dom';

const OurServices = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <p className='who-are-we mt-4'> Get to know</p>
                                <p className='OurServices-heading' >OUR <span>SERVICES </span> </p>
                                <p className='Help'>Establishing your company in the UAE requires understanding diverse jurisdictions. With Paramount Zone, unlock your
                                    company’s full potential. Our expert consultants provide tailored guidance,
                                    ensuring alignment with your business goals.</p>
                            </div>
                        </div>

                        <div className="row  ">
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }} className='shadow  '>
                                    <Card.Img variant="top" src={MainlandImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Freezone License</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            We help you choose right free zone, handle legal and
                                            regulatory requirements, and ensure a smooth
                                            process. Focus on growing your business while we take care
                                            of the details.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/freezone">Get Details {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={FreezoneImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Mainland License</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            At Bizlantic, we specialize in premium Mainland Business Setup Services, designed to meet the unique
                                            requirements of both aspiring entrepreneurs and established enterprises.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/mainmain">Get Details {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={OffshoreImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Offshore License</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            Start your offshore business with Bizlantic’s all-inclusive setup services
                                            Our expert team handles license procurement, document preparation, and workspace solutions.

                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/offshoremain">Get Details {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={GoldenVisaImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Golden Visa</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            The UAE Golden Visa offers long-term residency to investors, entrepreneurs,
                                            and skilled professionals.
                                            We assist you with the entire process, from application to approval.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/goldmain">Get Details {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={CitizenshipImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Citizenship</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            We assist in obtaining second citizenship through investment,
                                            residency, and naturalization programs.Our experts guide you in selecting the best country based on
                                            your needs.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/citymain">Get Details {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={CorpTaxImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Corp. Tax & VAT</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            We provide expert assistance in registering for corporate tax in the UAE.
                                            Our experienced team will guide you through the entire process, ensuring
                                            full compliance with local tax regulations.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/corporatemain">Get Details {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;