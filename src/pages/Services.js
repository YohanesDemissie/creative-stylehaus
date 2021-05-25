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
        <p className="services-sub-title">THE MINISTRY OF FASHION</p>
        <p className="services-list">CREATIVE CONCEPT CREATION | CREATIVE DIRECTION | ON SET & RUNWAY | FRONT & BACK OF HOUSE PRODUCTION | STYLING - COSTUME | ON LOCATION | TRAVELING | WARDROBE | AGENCY | EDITORIAL | VIRTUAL | CORPORATE | MODEL TESTING | INFLUENCING | MERCHANDISING | PHOTOGRAPHY | IMAGE CONSULTING | PERSONAL SHOPPING | CLOSET DETOX | ORGANIZATION | REFRESH | EDUCATION | MENTORSHIP | B2B | MARKETING & COLLABORATIONS</p>
      </div>
      <div className="service-items-container">
        <h1 className="runway-text">RUNWAY PRODUCTION</h1>
        <img className="runway-image" src="https://imageproxy.themaven.net//https%3A%2F%2Ffashionista.com%2F.image%2FMTczMDEzMDkzMDM3NjQ3MDg0%2Fpyer-moss-spring-2020.png" />
      </div>

      <div className="service-items-container">
        <h1 className="runway-text">CREATIVE DIRECTION & STYLING</h1>
        <img className="runway-image" src="https://www.isdi.in/shortcourses/wp-content/uploads/2020/06/1-2.jpg" />
      </div>

      <div className="service-items-container">
        <h1 className="runway-text">IMAGE CONSULTING</h1>
        <img className="runway-image" src="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2016/02/Shamayim2.jpg" />
      </div>

      <div className="service-items-container">
        <h1 className="runway-text">EDUCATION</h1>
        <img className="runway-image" src="https://fashionunited.com/images/202009/fashion_education_1.jpg" />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Services;