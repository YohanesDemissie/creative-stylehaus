import React from 'react';
import ReactPlayer from 'react-player';
import WelcomeVid from '../assets/videos/welcome.mp4';
import '../styles/welcome.css';

// VIDEO SOURCE https://giphy.com/clips/nyfw-new-york-fashion-week-nyfw-feb-2021-rebecca-minkoff-zcDX3xq4TirxRR0OgX 
const Welcome = () => {
  return (
    <div>
      <div className="top-content"></div>
            {/* <iframe allow='autoPlay;' muted='true' volume={0}
 src="https://www.kapwing.com/e/613a64ef8a594000f02a772f?autoplay=0&showinfo=0&controls=0&muted=1"  frameborder="0" width="100%" height="100%" allowFullscreen  allow="autoplay; encrypted-media" id="myVideo" type="video/mp4" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"></iframe> */}

      <iframe allow="autoplay; gyroscope;" allowfullscreen height="100%" referrerpolicy="strict-origin" src="https://www.kapwing.com/e/613aa6a99b7d7f003d76e493?autoplay=true" style={{border:0, height:'100%', left:0, overflow:'hidden', position:'absolute', top:0, width:'100%'}} title="Embedded content made on Kapwing" width="100%"></iframe>

      {/* <iframe allow="autoplay; gyroscope" allowFullscreen height="100%" referrerPolicy="strict-origin" src="https://www.kapwing.com/e/613a8556e4689700950aafc5" autoplay/> */}
      <div className="content"></div>
      <a href="/home" className="welcome-button">Enter The Ministry of Fashion</a>  {/* this may change later */}
    </div>
  )
}

export default Welcome;
