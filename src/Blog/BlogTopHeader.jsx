import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import AskQuestion from '../1.Home/AskQuestion';
import Newsletter from '../1.Home/Newsletter';
import WithBiz from '../AboutUs/WithBiz';
import OurServices from '../1.Home/OurServices';
import Footer from '../1.Home/Footer';

const BlogTopHeader = () => {
    return (
        <header>
             <TopHeader />
             <HeaderNav /> 
             <OurServices/>
             <WithBiz/>
             <AskQuestion/>
             <Newsletter/>
             <Footer/>
        </header>
    );
};

export default BlogTopHeader;