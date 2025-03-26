import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import WebOffer from './WebOffer';
import WebReg from './WebReg';
import WebBiz from './WebBiz';
import WebGetKnow from './WebGetKnow';
import WebSecondBiz from './WebSecondBiz';

const WebMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <WebReg />
            <WebBiz />
            <WebGetKnow />
            <WebOffer />
            <WebSecondBiz/>
            <Footer />
        </div>
    )
}

export default WebMain;