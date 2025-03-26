import React from 'react';
import './TopHeader.css';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className=' main-top-header'>            
      <div >
        <ul className=' top-header-list  justify-content-end  d-flex py-2 py-md-0'>
          <li className='d-none d-md-flex'><Link to="/about">About Us</Link></li>          
          <li className='d-none d-md-flex'> <Link to="/contact">Contact Us</Link></li>
          <li className='d-none d-md-flex'><Link to="/faq">FAQ</Link></li>
          <li className='d-none d-md-flex'><Link to="/blogholder">Blog</Link></li>
          <li className='d-none d-md-flex'>|</li>
          <li className='d-none d-md-flex'>  00971 4234567 </li>
          <li className='d-none d-md-flex'>  info@bizlantic.com  </li>
        </ul>
      </div>
    </div>

  );
};

export default TopHeader;