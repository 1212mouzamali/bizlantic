import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import WithBiz from '../AboutUs/WithBiz';
import Footer from '../1.Home/Footer';
import CostCalCompo from './CostCalCompo';
import CostHeaderNav from './CostHeaderNav';
 
const CostCalc = () => {
    return (
        <div>
            <TopHeader/>
            <CostHeaderNav/>
            <CostCalCompo/> 
            <WithBiz/>     
            <Footer/>
        </div>
    );
};

export default CostCalc;