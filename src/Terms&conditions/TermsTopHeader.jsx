import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import RegisterBar from '../1.Home/RegisterBar';
import Newsletter from '../1.Home/Newsletter';
import AskQuestion from '../1.Home/AskQuestion';
import Footer from '../1.Home/Footer';
import TermsPara from './TermsPara';

const TermsTopHeader = () => {
    return (
        <header>
            <TopHeader />
            <HeaderNav />
            <TermsPara/>
            <RegisterBar />
            <AskQuestion />
            <Newsletter />
            <Footer />
        </header>
    );
};

export default TermsTopHeader;