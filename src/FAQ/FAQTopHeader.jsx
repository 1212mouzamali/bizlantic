import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import RegisterBar from '../1.Home/RegisterBar';
import AskQuestion from '../1.Home/AskQuestion';
import Newsletter from '../1.Home/Newsletter';
import Footer from '../1.Home/Footer';
import Faq from '../1.Home/Faq';

const FAQTopHeader = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav /> 
           <Faq/>
           <RegisterBar/>
           <AskQuestion/>
           <Newsletter/>
           <Footer/>
        </div>
    );
};

export default FAQTopHeader;