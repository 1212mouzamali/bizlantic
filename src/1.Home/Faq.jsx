import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './Footer.css';


const Faq = () => {
    return (
        <>
            <div className="container faq-background">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <p className="AqFirst">Your question answered here</p>
                        <p className="faq-frequently ">Frequently <span>Asked Questions</span></p>
                        <p className="Help">Setting up a company in the UAE involves understanding different legal frameworks. At Bizlantic, we provide expert advice tailored to your business needs, helping you navigate these complexities and align your company with its goals.</p>
                        <Accordion defaultActiveKey="0" className="faq-main-accordion">
                            <Accordion.Item eventKey="0" className="bg-light">
                                <Accordion.Header className="faq-header">1 - What is a free zone company in the UAE?</Accordion.Header>
                                <Accordion.Body className="Help">
                                    A free zone in the UAE, such as those facilitated by RAKEZ, is an economic area with its own business regulations that do not apply to
                                    businesses outside the zone. Free zone companies trade services and products, while leveraging special tax and foreign ownership laws.
                                    A free zone company in the UAE, such as those facilitated by RAKEZ, is an entity that enjoys numerous advantages, including tax
                                    exemptions, full foreign ownership and simplified business regulations within designated RAK economic zones.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>2 - How can a free zone business owner get a visa in the UAE?</Accordion.Header>
                                <Accordion.Body className="Help">
                                The UAE Golden Visa offers long-term residency to investors, entrepreneurs, and skilled professionals.                                
                                 We assist you with the entire process, from application to approval
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header >3 - What are the benefits of setting up a business in a free zone in the UAE?</Accordion.Header>
                                <Accordion.Body className="Help">
                                The UAE Golden Visa offers long-term residency to investors, entrepreneurs,
                                 and skilled professionals. 
                                We assist you with the entire process, from application to approval

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Faq;