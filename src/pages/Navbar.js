import React from 'react';
import '../styles/navbar.css'
import PinkLips from '../assets/photos/pink-lips.png';


const Navbar = () => {
  return(
    <div>

      <nav>
            <img src={PinkLips} />
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PORTFOLIO</li>
          {/* <li>PUBLISHED</li> */}
          <li>PRESS</li>
          <li>VIDEO</li>
          {/* <li>SHOP</li> */}
          <li>SERVICES</li>
          <li>BIO</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
