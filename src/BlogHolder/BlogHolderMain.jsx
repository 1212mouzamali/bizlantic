import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import AskQuestion from '../1.Home/AskQuestion';
import Newsletter from '../1.Home/Newsletter';
import Footer from '../1.Home/Footer';
import BlogHolderCmpo from './BlogHolderCmpo';

const BlogHolderMain = () => {
  return (
    <div>
        <TopHeader/>
        <HeaderNav/>
        <BlogHolderCmpo/>
        <AskQuestion/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default BlogHolderMain;