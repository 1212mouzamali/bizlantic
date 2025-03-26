import React from 'react';
import Card from 'react-bootstrap/Card';
import '../1.Home/StartJourney.css';
import MainlandImg from '../assets/MainlandImg.png';
import FreezoneImg from '../assets/FreezoneImg.png';
import OffshoreImg from '../assets/OffshoreImg.png';
import GoldenVisaImg from '../assets/GoldenVisaImg.png';
import CitizenshipImg from '../assets/CitizenshipImg.png';
import CorpTaxImg from '../assets/CorpTaxImg.png';
import { Link } from 'react-router-dom';

const BlogHolderCmpo = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <p className='who-are-we mt-4'> What to discover ways to grow your business?</p>
                                <p className='OurServices-heading' >Check out our blog to explore <br /> <span>the full potential of your business </span> </p>
                                <p className='Help'>Packed with expert insights, practical tips, and the latest trends, our blog is your go-to resource for navigating the UAE’s dynamic business landscape. Whether you’re starting a new venture, expanding operations, or optimizing your strategy, our articles provide actionable advice to help you succeed.

                                </p>
                                <p className='Help'>
                                    Stay informed, inspired, and ahead of the competition by unlocking valuable knowledge tailored to your business goals.
                                </p>
                            </div>
                        </div>

                        <div className="row  ">
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }} className='shadow  '>
                                    <Card.Img variant="top" src={MainlandImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            We help you choose right free zone, handle legal and
                                            regulatory requirements, and ensure a smooth
                                            process. Focus on growing your business while we take care
                                            of the details.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/blog">Read More {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={FreezoneImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            At Bizlantic, we specialize in premium Mainland Business Setup Services, designed to meet the unique
                                            requirements of both aspiring entrepreneurs and established enterprises.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/blog">Read More {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={OffshoreImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            Start your offshore business with Bizlantic’s all-inclusive setup services
                                            Our expert team handles license procurement, document preparation, and workspace solutions.

                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/blog">Read More {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={GoldenVisaImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            The UAE Golden Visa offers long-term residency to investors, entrepreneurs,
                                            and skilled professionals.
                                            We assist you with the entire process, from application to approval.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/blog">Read More {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={CitizenshipImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            We assist in obtaining second citizenship through investment,
                                            residency, and naturalization programs.Our experts guide you in selecting the best country based on
                                            your needs.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/blog">Read More {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src={CorpTaxImg} />
                                    <Card.Body>
                                        <Card.Title className='services-card-title'>Affordable Business Setup in Dubai: A Simple 5-Step Guide</Card.Title>
                                        <Card.Text className='services-card-text'>
                                            We provide expert assistance in registering for corporate tax in the UAE.
                                            Our experienced team will guide you through the entire process, ensuring
                                            full compliance with local tax regulations.
                                        </Card.Text>
                                        <Link className='services-card-detail rounded-1 px-5 py-1 d-block text-center' to="/blog">Read More {'>'}</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-4 mt-3">
                            <Link className='services-card-detail bg-dark rounded-1  py-2  d-block text-center' to="/blog">Load More {'>'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHolderCmpo;