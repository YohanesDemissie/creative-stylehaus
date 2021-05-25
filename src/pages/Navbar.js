import React from 'react';
import '../styles/navbar.css'
import PinkLips from '../assets/photos/pink-lips.png';
import Contact from './Contact';

function handleClick() {
  window.scrollTo(999, 999, ({ behavior: "smooth" }));
}

const Navbar = () => {
  return(
    <div>
      <nav>
            <img src={PinkLips} />
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li>PORTFOLIO</li>
          {/* <li>PUBLISHED</li> */}
          <li>PRESS</li>
          <li>VIDEO</li>
          {/* <li>SHOP</li> */}
          <li><a href="/services">SERVICES</a></li>
          <li>BIO</li>
          <li onClick={handleClick}>CONTACT</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
