import React from 'react';
import FacebookIcon from '../assets/photos/FacebookIconBlack.png';
import InstagramIcon from '../assets/photos/InstagramIconBlack.png';
import TwitterIcon from '../assets/photos/TwitterIconBlack.png';
import '../styles/footer.css';

const Footer = () => {
  return(
    <div className="footer-container">
      <p className="footer-quote">It Will Be Our Honor To Serve You In The Ministry Of FASHION.</p>
      <p className="footer-number">469.665.9580</p>
      <div className="social-media-icons-wrapper">
        <a href='https://www.facebook.com/HarlemHaberdashery/'>
          <img src={FacebookIcon} className="social-media-icons" />
        </a>
        <a href='https://www.instagram.com/catrinathecreative/?hl=en'>
          <img src={InstagramIcon} sty className="social-media-icons"/>
        </a>
        <a href='https://twitter.com/haberdasherynyc/'>
          <img src={TwitterIcon} sty className="social-media-icons"/>
        </a>
      </div>
      <p className="footer-number">©2020 by THE CREATIVE STYLEHAUS FASHION FIRM.</p>
  </div>
  )
}

  // footerLogo: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   resizeMode: 'cover',
  //   marginTop: 50,
  //   marginBottom: 50,
  //   width: 175,
  //   height: 175
  // }


export default Footer;