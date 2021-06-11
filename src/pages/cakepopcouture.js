import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import Contact from './Contact';
import CakePop from '../assets/photos/cake-pop-couture.jpeg';
import CakePopModel from '../assets/photos/cake-pop-model.jpg';
import '../styles/cakepopcouture.css';

const CakePopCouture = () => {
  return(
    <div>
      <Navbar />
      < div className="cake-pop-container">
        {/* <h1 className="cake-pop-title">CAKE POP COUTURE</h1> */}
        <img className="cake-pop-image" src={CakePop} />
        <img className="cake-pop-image-two" src={CakePopModel} />
        {/* <p>Click below for inquiries on catering</p> */}
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CakePopCouture;