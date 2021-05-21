import React from 'react';
import RunwayImage from '../assets/photos/runway.jpg';
import '../styles/home.css'

const Home = () => {
  return (
    <div>
      {/* <h1 className="home-title">The CREATIVE STYLEHAUS</h1> */}
      <div className="home-runway-container">
       <h1>THE CREATIVE
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
        <h1>Where Creative minds meet creative solutions</h1>
      </div>
      <div className="home-runway-container-three">
        <h1>Schedule your free consultation today with <u>Catrina the Creative!</u></h1>
      </div>
    </div>
  )
}

export default Home;