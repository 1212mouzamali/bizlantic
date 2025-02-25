import React from 'react';
import './TopHeader.css';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div>  
          
          <div className=' main-top-header'>
            <ul className=' top-header-list'>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li>|</li>
              <li>  00971 4234567 </li>
              <li>  info@bizlantic.com  </li>
            </ul>
          </div>      
    
    </div>
  );
};

export default TopHeader;