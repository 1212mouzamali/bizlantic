import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './Footer.css';


const Faq = () => {
    return (
        <>
            <div className="container faq-background">
                <div className="row">
                <p className="faq-frequently text-center">Frequently <span>Asked Questions</span></p>
                    <div className="col-1"></div>                  
                    <div className="col-10">
                        <Accordion defaultActiveKey="0" className="faq-main-accordion">
                            <Accordion.Item eventKey="0" className="bg-light">
                                <Accordion.Header className="faq-header">1 - What is a free zone company in the UAE?</Accordion.Header>
                                <Accordion.Body>
                                    A free zone in the UAE, such as those facilitated by RAKEZ, is an economic area with its own business regulations that do not apply to
                                    businesses outside the zone. Free zone companies trade services and products, while leveraging special tax and foreign ownership laws.
                                    A free zone company in the UAE, such as those facilitated by RAKEZ, is an entity that enjoys numerous advantages, including tax
                                    exemptions, full foreign ownership and simplified business regulations within designated RAK economic zones.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>2 - How can a free zone business owner get a visa in the UAE?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>3 - What are the benefits of setting up a business in a free zone in the UAE?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut

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