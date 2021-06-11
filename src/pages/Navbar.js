import React from 'react';
import '../styles/navbar.css'
import CSHLogo from '../assets/photos/CSH-Logo.png';

function handleClick() {
  window.scrollTo(9999, 9999);
}

const Navbar = () => {
  return(
    <div>
      <nav>
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li>PORTFOLIO</li>
          <li>PUBLISHED</li>
          <li>PRESS</li>
          <li><a>VIDEOS</a></li>
          <li>SHOP</li>
          <li><a href="/services">SERVICES</a></li>
          <li>BIO</li>
          <li><a href="/cake-pop-couture">CAKE POP COUTURE</a></li>
          <li onClick={handleClick}>CONTACT</li>
        </ul>
        <div className="logo-container">
            <img className="logo" src={CSHLogo} />
            <h2 className="nav-title">THE CREATIVE STYLEHAUS FASHION FIRM</h2>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
