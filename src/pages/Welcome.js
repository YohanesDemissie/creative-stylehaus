import React from 'react';
import WelcomeVid from '../assets/videos/welcome.mp4';
import '../styles/welcome.css';

// VIDEO SOURCE https://giphy.com/clips/nyfw-new-york-fashion-week-nyfw-feb-2021-rebecca-minkoff-zcDX3xq4TirxRR0OgX 
const Welcome = () => {
  return (
    <div>
      <div className="top-content"></div>
      <iframe src={"https://www.kapwing.com/e/613a64ef8a594000f02a772f"} width="100%" height="100%"fullscreen autoPlay={true} muted={true} loop={true} id="myVideo" type="video/mp4" />
      <div className="content"></div>
      <a href="/home" className="welcome-button">Enter The Ministry of Fashion</a>  {/* this may change later */}
    </div>
  )
}

export default Welcome;
