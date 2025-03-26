import React from 'react';
import TopHeader from '../1.Home/TopHeader.jsx';
import HeaderNav from '../1.Home/HeaderNav';
import RegisterBar from '../1.Home/RegisterBar';
import Newsletter from '../1.Home/Newsletter';
import AskQuestion from '../1.Home/AskQuestion';
import Footer from '../1.Home/Footer';
import PrivacyPara from './PrivacyPara.jsx';

const PrivacyTopHeader = () => {
    return (
        <header>
            <TopHeader/>          
            <HeaderNav />
            <PrivacyPara/>
            <RegisterBar />
            <AskQuestion />
            <Newsletter />
            <Footer />
        </header>
    );
};

export default PrivacyTopHeader;