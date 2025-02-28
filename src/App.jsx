import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from './1.Home/TopHeader';
import AboutTopHeader from './AboutUs/AboutTopHeader';
import ContactTopHeader from './ContactUs/ContactTopHeader';
import FAQTopHeader from './FAQ/FAQTopHeader';
import BlogTopHeader from './Blog/BlogTopHeader';
import HeaderNav from './1.Home/HeaderNav';
import StartJourney from './1.Home/StartJourney';
import RegisterBar from './1.Home/RegisterBar';
import WhyUs from './1.Home/WhyUs';
import TurnBar from './1.Home/TurnBar';
import UaeCost from './1.Home/UaeCost';
import OurServices from './1.Home/OurServices';
import FreeConsultation from './1.Home/FreeConsultation';
// import Partners from './1.Home/Partners';
import ClientSay from './1.Home/ClientSay';
import AskQuestion from './1.Home/AskQuestion';
import WeAreBiz from './AboutUs/WeAreBiz';
import LearnMore from './1.Home/LearnMore';
import Faq from './1.Home/Faq';
import Newsletter from './1.Home/Newsletter';
import Footer from './1.Home/Footer';
import LoginMain from './Login/LoginMain';
import RegisterMain from './RegisterPage/RegisterMain';

import './App.css';
import CostCalc from './CostCalculator/CostCalc';
import FreezoneMain from './Freezone/FreezoneMain';

const Home = () => {
  return (
    <>
      <TopHeader />
      <HeaderNav />
      <StartJourney />
      <RegisterBar />
      <WhyUs />
      <TurnBar />
      <UaeCost />
      <OurServices />
      <FreeConsultation />
      {/* <Partners /> */}
      <ClientSay />
      <AskQuestion />
      <WeAreBiz/>
      <LearnMore />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  );
};

function App() {
 
  return (   
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutTopHeader />} />
        <Route path="/about" element={<AboutTopHeader />} />
        <Route path="/contact" element={<ContactTopHeader />} />
        <Route path="/blog" element={<BlogTopHeader />} />
        <Route path="/faq" element={<FAQTopHeader />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="/costcalc" element={<CostCalc />} />
        <Route path="/freezone" element={<FreezoneMain />} />
      </Routes>
   
    
  );
}

export default App;
