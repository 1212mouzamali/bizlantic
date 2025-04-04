import React from 'react';
import './AboutTopHeader.css'
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import AskQuestion from '../1.Home/AskQuestion';
import Newsletter from '../1.Home/Newsletter';
import Footer from '../1.Home/Footer';
import WhyUs from '../1.Home/WhyUs';
import WeAreBiz from './WeAreBiz';
import GlobeAbout from './GlobeAbout';
import AboutKnow from './AboutKnow';
import WithBiz from './WithBiz';
import ClientSay from '../1.Home/ClientSay';
import Partners from '../1.Home/Partners';

const AboutTopHeader = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />  
            <GlobeAbout />    
            <AboutKnow/> 
            <WeAreBiz/> 
            <WhyUs/>
            <ClientSay/>
            <Partners/>
            <WithBiz/>
            <AskQuestion/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default AboutTopHeader;