import React from 'react';
import '../styles/videos.css';
import Navbar from './Navbar';
import VideoPage1 from '../assets/videos/VideosPage1.MOV';
import VideoPage2 from '../assets/videos/CSH-Video-2.mov';
import VideoPage3 from '../assets/videos/CSH-Video-3.MOV';
import Contact from './Contact';
import Footer from './Footer';

const Videos = () => {
  return (
    <div>
      <Navbar />
      <div className="video-one">
        <video autoPlay={true} muted={true} loop={true}>
          <source src={VideoPage1} type="video/mp4" />
        </video>
      </div>

      <div className="video-two">
        <video autoPlay={true} muted={true} loop={true}>
          <source src={VideoPage2} type="video/mp4" />
        </video>
      </div>

      <div className="video-three">
        <video autoPlay={true} muted={true} loop={true}>
          <source src={VideoPage3} type="video/mp4" />
        </video>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Videos;