import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import DigitalOffer from './DigitalOffer';
import DigitalReg from './DigitalReg';
import DigitalBiz from './DigitalBiz';
import DigitalGetKnow from './DigitalGetKnow';
import DigitalSecondBiz from './DigitalSecondBiz';
const DigitalMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <DigitalReg />
            <DigitalBiz />
            <DigitalGetKnow />
            <DigitalOffer />
            <DigitalSecondBiz />
            <Footer />
        </div>
    )
}

export default DigitalMain;