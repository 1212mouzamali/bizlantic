import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import OffShoreOffer from './OffShoreOffer';
import OffShoreReg from './OffShoreReg';
import OffShoreBiz from './OffShoreBiz';
import OffShoreGetKnow from './OffShoreGetKnow';
import VatSecondBiz from '../VAT Registration/VatSecondBiz';
const OffShoreMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <OffShoreReg />
            <OffShoreBiz />
            <OffShoreGetKnow />
            <OffShoreOffer />
            <VatSecondBiz />
            <Footer />
        </div>
    )
}

export default OffShoreMain;