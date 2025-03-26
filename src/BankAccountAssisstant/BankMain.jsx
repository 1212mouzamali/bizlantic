import React from 'react'
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import BankOffer from './BankOffer';
import BankReg from './BankReg';
import BankBiz from './BankBiz';
import BankGetKnow from './BankGetKnow';
import VatSecondBiz from '../VAT Registration/VatSecondBiz';
const BankMain = () => {
    return (
        <div>
            <TopHeader />
            <HeaderNav />
            <BankReg />
            <BankBiz />
            <BankGetKnow />
            <BankOffer />
            <VatSecondBiz />
            <Footer />
        </div>
    )
}

export default BankMain;