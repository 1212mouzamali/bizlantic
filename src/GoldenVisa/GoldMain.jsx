import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import GoldOffer from './GoldOffer';
import GoldReg from './GoldReg';
import GoldBiz from './GoldBiz';
import GoldGetKnow from './GoldGetKnow';
import GoldSecondBiz from './GoldSecondBiz';
const GoldMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <GoldReg />
            <GoldBiz />
            <GoldGetKnow />
            <GoldOffer />
            <GoldSecondBiz />
            <Footer />
        </div>
    )
}

export default GoldMain;