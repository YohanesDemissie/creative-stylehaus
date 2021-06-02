import React from 'react';
// import RunwayImage from '../assets/photos/runway.jpg';
import Navbar from './Navbar';
import '../styles/home.css'
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-runway-container">
       <h1 className="home-title">THE CREATIVE
         <br />
         STYLEHAUS
         <br />
         FASHION  FIRM
         </h1>

         <p className="home-sub-title-main">THE MINISTRY OF FASHION</p>
          {/* <br /> */}
         <p className="home-sub-title">A Boutique FASHION Firm Sharing God’s LOVE Personally Approached, By</p>
         {/* <br /> */}
         <p className="home-sub-title">Ministering Service In Every Aspect Of Fashion.</p>
      </div>
      <div className="home-runway-container-two">
        <h1 className="home-title">Where Creative minds meet creative solutions</h1>
      </div>
      <div className="home-runway-container-three">
        <h1 className="home-title">Schedule your free consultation today with <u>Catrina the Creative!</u></h1>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;