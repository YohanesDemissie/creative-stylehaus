import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import Contact from './Contact';
import '../styles/cakepopcouture.css';

const CakePopCouture = () => {
  return(
    <div>
      <Navbar />
      < div className="cake-pop-container">
        <h1 className="cake-pop-title">CAKE POP COUTURE</h1>
        <img className="cake-pop-image" src="http://www.sugarpopbakery.com.au/wp-content/uploads/2019/01/cakepops1-2.jpg" />
        <img className="cake-pop-image"src="https://i.pinimg.com/736x/af/6e/41/af6e41861b15a428ba7047135ba2d543.jpg" />
        <img className="cake-pop-image"src="https://marrymetampabay.com/wp-content/uploads/2017/08/01-49936-post/unnamed-1(pp_w768_h727).jpg" />
        <p>Click below for inquiries on catering</p>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CakePopCouture;