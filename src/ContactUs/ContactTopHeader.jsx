import React from 'react';

import TopHeader from '../1.Home/TopHeader.jsx';
import HeaderNav from '../1.Home/HeaderNav';
import AskQuestion from '../1.Home/AskQuestion';
import Newsletter from '../1.Home/Newsletter';
import Footer from '../1.Home/Footer';


const ContactTopHeader = () => {
    return (
        <header>
            <TopHeader/>
            <HeaderNav/>
            <AskQuestion/>
            <Newsletter/>
            <Footer/>
           
        </header>
    );
};

export default ContactTopHeader;