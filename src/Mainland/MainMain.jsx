import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import MainOffer from './MainOffer';
import MainReg from './MainReg';
import MainBiz from './MainBiz';
import MainGetKnow from './MainGetKnow';
import MainSecondBiz from './MainSecondBiz';

const MainMain = () => {
    return (
        <div>     
            <TopHeader />
            <HeaderNav />
            <MainReg />
            <MainBiz />
            <MainGetKnow />
            <MainOffer />
            <MainSecondBiz/>
            <Footer />
            </div>
    )
}

export default MainMain;