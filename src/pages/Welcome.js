import React from 'react';
import WelcomeVid from '../assets/videos/welcome.mp4';
import '../styles/welcome.css';

  // VIDEO SOURCE https://giphy.com/clips/nyfw-new-york-fashion-week-nyfw-feb-2021-rebecca-minkoff-zcDX3xq4TirxRR0OgX 
const Welcome = () => {
  return(
    <div>
      <div className="top-content"></div>
      <video autoPlay={true} muted={true} loop={true} id="myVideo">
        <source src={WelcomeVid} type="video/mp4" />
      </video>
      <div className="content"></div>
      <a href="/home" className="welcome-button">Enter Catrinas Creative Style Haus</a>
    </div>
  )
}

export default Welcome;
