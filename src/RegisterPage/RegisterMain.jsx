import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import WithBiz from '../AboutUs/WithBiz';
import Newsletter from '../1.Home/Newsletter';
import Footer from '../1.Home/Footer';
import RegisterForm from './RegisterForm';
const RegisterMain = () => {
   
    return (
        <div>
            <TopHeader/>
             <HeaderNav/>
             <RegisterForm/>             
             <WithBiz/>
             <Newsletter/>
             <Footer/>
        </div>
    );
};

export default RegisterMain;