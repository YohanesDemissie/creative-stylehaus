import React from 'react';
import Navbar from './Navbar.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import '../styles/services.css';

const Services = () => {
  return(
    <div>
      <Navbar />
      <h1 className="services-title">Services</h1>
      <div className="services-text">
        <p>THE MINISTRY OF FASHION</p>
        <p className="services-list">CREATIVE CONCEPT CREATION | CREATIVE DIRECTION | ON SET & RUNWAY | FRONT & BACK OF HOUSE PRODUCTION | STYLING - COSTUME | ON LOCATION | TRAVELING | WARDROBE | AGENCY | EDITORIAL | VIRTUAL | CORPORATE | MODEL TESTING | INFLUENCING | MERCHANDISING | PHOTOGRAPHY | IMAGE CONSULTING | PERSONAL SHOPPING | CLOSET DETOX | ORGANIZATION | REFRESH | EDUCATION | MENTORSHIP | B2B | MARKETING & COLLABORATIONS</p>
      </div>
      <div className="service-items-container">
        {/* <img source="" */}
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Services;