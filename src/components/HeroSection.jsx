import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css';

const heroContent = [
  {
    title: "The Future of Daily Nutrition",
    subtitle: "Wellness your body needs.",
    description:
      "Beyond Nutrition for Modern Lifestyles",
    buttonText: "Shop Gummies",
    Image: "/images/bio_about.png",
  },
  {
    title: "Science-Backed Functional Gummies",
    subtitle: "Support your body the smarter way",
    description:
      "Stronger immunity • Deeper sleep • Radiant skin & hair • Calmer stress response • All-day natural energy • Healthy growing kids",
    buttonText: "Find Your Perfect Routine",
    videoSrc: "/videos/HeroSection.MP4",
  },
  {
    title: "A Daily Ritual You’ll Love",
    subtitle: "Consistency made effortless",
    description:
      "No pills. No water. No missed days. Just one delicious daily ritual.",
    buttonText: "Explore the Collection",
    Image: "/images/bio_about.png",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineVisibility, setLineVisibility] = useState({
    title: false,
    subtitle: false,
    description: false,
    button: false,
  });

  useEffect(() => {
    setLineVisibility({
      title: false,
      subtitle: false,
      description: false,
      button: false,
    });

    const timers = [];
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, title: true })), 200));
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, subtitle: true })), 600));
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, description: true })), 1000));
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, button: true })), 1400));

    return () => timers.forEach(t => clearTimeout(t));
  }, [activeIndex]);

  const slide = heroContent[activeIndex];

  return (
    <section className="hero-section-container">

      <video
        key={slide.videoSrc}
        className="hero-video-background fade-video"
        src={slide.videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <img src={slide.Image} className="hero-video-background" alt="Hersection image for BioME+" />

      <div className="hero-video-overlay"></div>

      <div className="hero-content-wrapper fade-text">
        <h1 className={`hero-title ${lineVisibility.title ? 'is-visible' : ''}`}>
          {slide.title}
        </h1>

        <p className={`hero-subtitle ${lineVisibility.subtitle ? 'is-visible' : ''}`}>
          {slide.subtitle}
        </p>

        <p className={`hero-description ${lineVisibility.description ? 'is-visible' : ''}`}>
          {slide.description}
        </p>

     
      </div>

      <div className="hero-dots">
        {heroContent.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        Clinically Inspired Formulations
        <span> • </span>
        Functional Botanicals
        <span> • </span>
        Irresistible Flavours
        <span> • </span>
        Family Wellness System
      </div>

    </section>
  );
};

export default HeroSection;