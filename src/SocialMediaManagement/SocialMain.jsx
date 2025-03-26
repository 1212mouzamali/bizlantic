import React from 'react'
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import SocialOffer from './SocialOffer';
import SocialReg from './SocialReg';
import SocialBiz from './SocialBiz';
import SocialGetKnow from './SocialGetKnow';
import SocialSecondBiz from './SocialSecondBiz';
const SocialMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <SocialReg />
            <SocialBiz />
            <SocialGetKnow />
            <SocialOffer />
            <SocialSecondBiz />
            <Footer />
        </div>
    )
}

export default SocialMain;