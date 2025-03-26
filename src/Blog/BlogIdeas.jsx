import React from 'react';
import '../Terms&conditions/Terms.css';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Burjimg from '../assets/Burjimg.jpg';
import { Link } from 'react-router-dom';
const BlogIdeas = () => {

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
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 bg-light p-4 mt-5">
                        <p className='AqFirst'>21, November 2024   |   BY BIZLANTIC.COM</p>
                        <p className='OurServices-heading' >TOP 10 EXCITING BUSINESS IDEASbr <br /><span> FOR DUBAI'S YOUNG ENTEREPRENEURS</span> </p>

                        <p className='terms-para'><p className='terms-para'>Dubai’s vibrant market and innovative spirit offer a world of opportunities—not just for seasoned professionals but also for ambitious young minds. The city’s dynamic economy, advanced technology, and diverse population make it the perfect place for youth to dive into entrepreneurship. From digital ventures to creative services, there are countless ways for young innovators to explore the world of business and bring their ideas to life.</p></p>

                        <p className='terms-heading'>1. Crafts and Custom Creations
                        </p>
                        <p className='terms-para'>With the UAE’s booming e-commerce market, creative youth can channel their artistic flair into crafting unique products like jewelry, custom phone cases, or personalized T-shirts. Platforms like Instagram, Etsy, and local markets provide a perfect stage for showcasing these items,
                            tapping into Dubai’s love for artisanal and bespoke goods.</p>
                        <p className='terms-heading '>2. Social Media Management</p>
                        <p className='terms-para'>For the social media-savvy, managing accounts for local businesses on platforms like TikTok, Instagram, and Facebook is a natural fit. Entrepreneurs are always looking for fresh ideas to enhance their online presence, and young creators have the skills to deliver engaging content and boost customer interaction.
                        </p>
                        <p className='terms-heading '>3. Online Tutoring
                        </p>
                        <p className='terms-para'>Young scholars excelling in academics or languages can provide online tutoring for peers or expatriates. Using tools like Zoom or Google Meet, they can offer flexible sessions tailored to Dubai’s diverse student community, making a difference while earning extra income.
                        </p>
                        <p className='terms-heading '>4. Content Creation on YouTube, Blogs, or TikTok
                        </p>
                        <p className='terms-para'>Passionate about gaming, fashion, travel, or tech? Launching a blog or YouTube channel allows young creators to share their insights, build a following, and eventually earn through ads, sponsorships, and affiliate links. Niche content about Dubai’s lifestyle or attractions can draw a local and international audience.

                        </p>

                        <p className='terms-heading '>5. Virtual Assistance Services
                        </p>
                        <p className='terms-para'>From managing emails to scheduling appointments, young organizers can provide virtual assistance to Dubai’s bustling startups and professionals. This flexible option allows them to support businesses remotely while balancing their own schedules.
                        </p>

                        <p className='terms-heading '>6. Pet Care Services </p>
                        <p className='terms-para'>The growing number of pet owners in Dubai has created a high demand for services like dog walking, pet sitting, and even grooming. Animal-loving youth can connect with clients through social media or specialized pet care apps, creating a fulfilling and profitable side hustle.</p>

                        <div className="row">
                            <div className="col about-hr my-4">
                            </div>
                        </div>
                       
                            <div className="row">

                                <div className="col learn-slick">                                   
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
                </div>
            </div>
        
    )
}

export default BlogIdeas;