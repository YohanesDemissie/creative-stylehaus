import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import '../styles/thankyou.css';

const ThankYou = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="thankyou-container">
        <h1 className="thankyou">THANK YOU! </h1>
        <h2 className="thankyou-text">We look forward to getting back to you as soon as possible! In the mean time, feel free to browse our merch, services, and media content. 
        <br />
        <p className="thankyou-close">Peace and blessings!</p></h2>
        <a href="/home" className="home-button">Return Home</a>
      </div>
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default ThankYou;