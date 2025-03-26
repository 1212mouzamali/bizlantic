import React from 'react';
import TopHeader from '../1.Home/TopHeader';
import HeaderNav from '../1.Home/HeaderNav';
import Footer from '../1.Home/Footer';
import VatOffer from './VatOffer';
import VatReg from './VatReg';
import VatBiz from './VatBiz';
import VatGetKnow from './VatGetKnow';
import VatSecondBiz from './VatSecondBiz';
const VatMain = () => {
  return (
    <div>
      <TopHeader />
      <HeaderNav />
      <VatReg />
      <VatBiz />
      <VatGetKnow />
      <VatOffer />
      <VatSecondBiz />
      <Footer />
    </div>
  )
}

export default VatMain;