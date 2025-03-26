import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import CorporateOffer from './CorporateOffer';
import CorporateReg from './CorporateReg';
import CorporateBiz from './CorporateBiz';
import CorporateGetKnow from './CorporateGetKnow';
import VatSecondBiz from '../VAT Registration/VatSecondBiz';
const CorporateMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <CorporateReg />
            <CorporateBiz />
            <CorporateGetKnow />
            <CorporateOffer />
            <VatSecondBiz />
            <Footer />
        </div>
    )
}

export default CorporateMain;