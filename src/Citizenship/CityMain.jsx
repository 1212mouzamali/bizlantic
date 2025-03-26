import React from 'react'
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import CityOffer from './CityOffer';
import CityReg from './CityReg';
import CityBiz from './CityBiz';
import CityGetKnow from './CityGetKnow';
import VatSecondBiz from '../VAT Registration/VatSecondBiz';
const CityMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <CityReg />
            <CityBiz />
            <CityGetKnow />
            <CityOffer />
            <VatSecondBiz />
            <Footer />
        </div>
    )
}

export default CityMain;