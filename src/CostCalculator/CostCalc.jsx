import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import Footer from '../1.Home/Footer';
import CostCalCompo from './CostCalCompo';
import CostHeaderNav from './CostHeaderNav';
import RegisterBar from '../1.Home/RegisterBar'
 
const CostCalc = () => {
    return (
        <div>
            <TopHeader/>
            <CostHeaderNav/>
            <CostCalCompo/> 
            <RegisterBar/>     
            <Footer/>
        </div>
    );
};

export default CostCalc;