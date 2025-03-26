import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import FreezoneStart from './FreezoneStart';
import WithBiz from '../AboutUs/WithBiz';
import FreezoneAbout from './FreezoneAbout';
import FreezoneAssist from './FreezoneAssist';
import UaeCost from '../1.Home/UaeCost';
import Faq from '../1.Home/Faq';
import AskQuestion from '../1.Home/AskQuestion';
import Newsletter from '../1.Home/Newsletter';
const FreezoneMain = () => {
    return (
        <div>
            <TopHeader/>
            <HeaderNav/>
            <FreezoneStart/>
            <WithBiz/>
           
            <FreezoneAbout/>
            <FreezoneAssist/>          
            <UaeCost/>
            <Faq/>
            <AskQuestion/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default FreezoneMain;