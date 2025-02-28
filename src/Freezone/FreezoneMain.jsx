import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import FreezoneStart from './FreezoneStart';
import WithBiz from '../AboutUs/WithBiz';
import FreezoneAbout from './FreezoneAbout';
const FreezoneMain = () => {
    return (
        <div>
            <TopHeader/>
            <HeaderNav/>
            <FreezoneStart/>
            <WithBiz/>
            <FreezoneAbout/>
            <Footer/>
        </div>
    );
};

export default FreezoneMain;