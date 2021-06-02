import React from 'react';
import '../styles/navbar.css'
// import PinkLips from '../assets/photos/pink-lips.png';

function handleClick() {
  window.scrollTo(9999, 9999);
}

const Navbar = () => {
  return(
    <div>
      <nav>
            {/* <img src={PinkLips} /> */}
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          {/* <li>PORTFOLIO</li> */}
          {/* <li>PUBLISHED</li> */}
          {/* <li>PRESS</li> */}
          <li><a href="/videos">VIDEOS</a></li>
          {/* <li>SHOP</li> */}
          <li><a href="/services">SERVICES</a></li>
          {/* <li>BIO</li> */}
          <li><a href="/cake-pop-couture">CAKE POP COUTURE</a></li>
          <li onClick={handleClick}>CONTACT</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
