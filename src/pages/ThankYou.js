import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import '../styles/thankyou.css';

const ThankYou = () => {
  return (
    <div>
      <Navbar />
      <div className="thankyou-container">
        <h1 className="thankyou">Thank you for reaching out! We look forward to getting back to you as soon as possible! In the mean time, feel free to browse our merch, services, and media content. Peace and blessings!</h1>
        <a href="/home" className="home-button">Return Home</a>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ThankYou;