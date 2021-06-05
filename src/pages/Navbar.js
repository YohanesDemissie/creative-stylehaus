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
        <div className="logo-container">
            <img className="logo" src={CSHLogo} />
            <h2 className="nav-title">THE CREATIVE STYLEHAUS FASHION FIRM</h2>
        </div>
        <ul>
          <li><a href="/home">HOME</a></li>
          {/* <li><a href="/about">ABOUT</a></li> */}
          {/* <li>PORTFOLIO</li> NOT REAL*/}
          {/* <li>PUBLISHED</li> NOT REAL*/}
          {/* <li>PRESS</li> NOT REAL*/}
          {/* <li><a href="/videos">VIDEOS</a></li> */}
          {/* <li>SHOP</li> NOT REAL*/}
          {/* <li><a href="/services">SERVICES</a></li> */}
          {/* <li>BIO NOT REAL</li> */}
          {/* <li><a href="/cake-pop-couture">CAKE POP COUTURE</a></li> */}
          <li onClick={handleClick}>CONTACT</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
