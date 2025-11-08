import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css'; 
const heroContent = {
  title: "Shathayu Retreat",
  subtitle: "Rejuvenation of Body and Mind in Nature's Embrace",
  description: "Located just 15 minutes from Bangalore International Airport, discover the essence of holistic healing and the power of Ayurveda for better well-being.",
  buttonText: "Contact Us",
  videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-mountain-with-trees-1191-large.mp4' // Placeholder video
};

const HeroSection = () => {
  const [lineVisibility, setLineVisibility] = useState({
    title: false,
    subtitle: false,
    description: false,
    button: false,
  });

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => {
      setLineVisibility(prev => ({ ...prev, title: true }));
    }, 200)); 

    timers.push(setTimeout(() => {
      setLineVisibility(prev => ({ ...prev, subtitle: true }));
    }, 500));

    timers.push(setTimeout(() => {
      setLineVisibility(prev => ({ ...prev, description: true }));
    }, 1000));

    timers.push(setTimeout(() => {
      setLineVisibility(prev => ({ ...prev, button: true }));
    }, 1500));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section className="hero-section-container">
      <video
        className="hero-video-background"
        src={heroContent.videoSrc}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <div className="hero-video-overlay"></div>

      <div className="hero-content-wrapper">
        
        <h1 className={`hero-title ${lineVisibility.title ? 'is-visible' : ''}`}>
          {heroContent.title}
        </h1>

        <p className={`hero-subtitle ${lineVisibility.subtitle ? 'is-visible' : ''}`}>
          {heroContent.subtitle}
        </p>

        <p className={`hero-description ${lineVisibility.description ? 'is-visible' : ''}`}>
          {heroContent.description}
        </p>

        <button className={`hero-cta-button ${lineVisibility.button ? 'is-visible' : ''}`}>
          {heroContent.buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;