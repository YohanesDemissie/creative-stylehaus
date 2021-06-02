import React from 'react';
import '../styles/videos.css';
import Navbar from './Navbar';
import VideosPage1 from '../assets/videos/VideosPage1.MOV';
import Contact from './Contact';
import Footer from './Footer';

const Videos = () => {
  return (
    <div>
      <Navbar />
      <div className="video-one">
        <video className="video-one" autoPlay={true} muted={true} loop={true}>
          <source src={VideosPage1} type="video/mp4" />
        </video>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Videos;