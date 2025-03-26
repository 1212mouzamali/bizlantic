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
import UaeCost from './1.Home/UaeCost';
import OurServices from './1.Home/OurServices';
import FreeConsultation from './1.Home/FreeConsultation';
import Partners from './1.Home/Partners';
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
import WithBiz from './AboutUs/WithBiz';
import PrivacyTopHeader from './PrivacyPolicy/PrivacyTopHeader';
import TermsTopHeader from './Terms&conditions/TermsTopHeader';
import AdminMain from './AdminDashboard/AdminMain';
import AgentMain from './AgentDashboard/AgentMain';
import UserMain from './UserDashboard/UserMain';
import VatMain from './VAT Registration/VatMain';
import GoldMain from './GoldenVisa/GoldMain';
import CityMain from './Citizenship/CityMain';
import BankMain from './BankAccountAssisstant/BankMain';
import DigitalMain from './DigitalMarketing/DigitalMain';
import SocialMain from './SocialMediaManagement/SocialMain';
import WebMain from './Web&AppDev/WebMain';
import CorporateMain from './Corporate/CorporateMain';
import OffShoreMain from './OffShore/OffShoreMain';
import MainMain from './Mainland/MainMain';
import BlogHolderMain from './BlogHolder/BlogHolderMain';

const Home = () => {
  return (
    <>

      <TopHeader />
      <HeaderNav />
      <StartJourney />
      <RegisterBar />
      <WhyUs />
      <WithBiz />
      <UaeCost />
      <OurServices />
      <FreeConsultation />
      <Partners />
      <ClientSay />
      <AskQuestion />
      <WeAreBiz />
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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutTopHeader />} />
      <Route path="/contact" element={<ContactTopHeader />} />
      <Route path="/blog" element={<BlogTopHeader />} />
      <Route path="/blogholder" element={<BlogHolderMain />} />
      <Route path="/faq" element={<FAQTopHeader />} />
      <Route path="/login" element={<LoginMain />} />
      <Route path="/register" element={<RegisterMain />} />
      <Route path="/costcalc" element={<CostCalc />} />
      <Route path="/freezone" element={<FreezoneMain />} />
      <Route path="/privacy" element={<PrivacyTopHeader />} />
      <Route path="/terms" element={<TermsTopHeader />} />
      <Route path="/adminmain" element={<AdminMain />} />
      <Route path="/agentmain" element={<AgentMain />} />
      <Route path="/usermain" element={<UserMain />} />
      <Route path="/vatmain" element={<VatMain/>} />
      <Route path="/goldmain" element={<GoldMain/>} />
      <Route path="/citymain" element={<CityMain/>} />
      <Route path="/bankmain" element={<BankMain/>} />
      <Route path="/digitalmain" element={<DigitalMain/>} />
      <Route path="/socialmain" element={<SocialMain/>} />
      <Route path="/webmain" element={<WebMain/>} />
      <Route path="/corporatemain" element={<CorporateMain/>} />
      <Route path="/offshoremain" element={<OffShoreMain/>} />
      <Route path="/mainmain" element={<MainMain/>} />
    </Routes>
  );
}

export default App;
