import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import CTCPortrait from '../assets/photos/CTCportrait.jpeg'
import '../styles/about.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <img className="about-image" src={CTCPortrait} />
        <h1 className="about-title">About</h1>
        <p className="about-sub-title">CREATIVE STYLE HAUS FASHION FIRM</p>
        <div class="about-text-container">
          <p className="about-text">I’ve always followed my heart and it’s gotten me this far. I’m highly intuitive and draw inspiration from the world around me. From a young age, I knew I wanted a career in fashion, a dream that became a reality in 2000. Since then, I’ve tried to get involved in a variety of projects, all of which have somehow become part of my ongoing creative journey.</p>
          <p className="about-text">Browse my entire Fashion Stylist Portfolio for examples of my latest work and contact information. Like what you see? If you’d like to collaborate, please get in touch.</p>
        </div>
      </div>

      <div className="about-container">
        <img className="about-image-two" src="http://theabsolutemag.com/wp-content/uploads/2015/07/naturedresses.jpg" />
        <p className="about-title">THE FULL PICTURE</p>
        <div className="about-text-container">
          <p className="about-text">Beauty is everywhere. I’ve learned to express this through fashion, and since 2000 it has become my life’s work. From a young age, I understood I had a calling, and I’m lucky to have found success in my vocation.</p>
          <p className="about-text">This Fashion Stylist Portfolio is inspired by the unusual and by the ordinary, by the colors provided and the colors created, by mother earth and the universe. I follow trends and apply them to my work, always trying to stay ahead of the curve. Interested in collaborating on a future project? Let’s be in touch!</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default About;