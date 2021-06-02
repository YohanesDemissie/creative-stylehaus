import React from 'react';
import Navbar from './Navbar.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import '../styles/services.css';
import BellaFour from '../assets/photos/Bella-four.JPG';
import CSHPortrait from '../assets/photos/CSH-portrait.jpg';

const Services = () => {
  return(
    <div>
      <Navbar />
      <h1 className="services-title">Services</h1>
      <div className="services-text">
        <p className="services-sub-title">THE MINISTRY OF FASHION</p>
        <p className="services-list">CREATIVE CONCEPT CREATION | CREATIVE DIRECTION | ON SET & RUNWAY | FRONT & BACK OF HOUSE PRODUCTION | STYLING - COSTUME | ON LOCATION | TRAVELING | WARDROBE | AGENCY | EDITORIAL | VIRTUAL | CORPORATE | MODEL TESTING | INFLUENCING | MERCHANDISING | PHOTOGRAPHY | IMAGE CONSULTING | PERSONAL SHOPPING | CLOSET DETOX | ORGANIZATION | REFRESH | EDUCATION | MENTORSHIP | B2B | MARKETING & COLLABORATIONS</p>
      </div>
      <div className="service-items-container">
        <h1 className="runway-text">RUNWAY PRODUCTION</h1>
        <img className="runway-image" src="https://www.essence.com/wp-content/uploads/2020/02/1206170872-scaled.jpg?" />
      </div>

      <div className="service-items-container">
        <h1 className="runway-text">CREATIVE DIRECTION & STYLING</h1>
                {/* <img className="runway-image" src="https://www.isdi.in/shortcourses/wp-content/uploads/2020/06/1-2.jpg" /> */}

        <img className="runway-image" src={BellaFour} />
      </div>

      <div className="service-items-container">
        <h1 className="runway-text">IMAGE CONSULTING</h1>
        {/* <img className="runway-image" src="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2016/02/Shamayim2.jpg" /> */}
        <img className="runway-image"src={CSHPortrait} />
      </div>

      <div className="service-items-container">
        <h1 className="runway-text">EDUCATION</h1>
        {/* <img className="runway-image" src="https://fashionunited.com/images/202009/fashion_education_1.jpg" /> */}
        <img className="runway-image" src="https://live.staticflickr.com/4173/34013071573_e0f57994d6_b.jpg" />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Services;