import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css';

const heroContent = [
  {
    title: "The Future of Daily Nutrition",
    subtitle: "In One Delicious Gummy",
    description:
      "Wellness that your body needs. A taste you’ll crave every single day.",
    buttonText: "Shop Gummies",
    imageSrc: "/images/banner-1-scaled.jpg",
  },
  {
    title: "Science-Backed Functional Gummies",
    subtitle: "Support your body the smarter way",
    description:
      "Stronger immunity • Deeper sleep • Radiant skin & hair • Calmer stress response • All-day natural energy • Healthy growing kids",
    buttonText: "Find Your Perfect Routine",
    imageSrc: "/images/banner-4-scaled.jpg",
  },
  {
    title: "A Daily Ritual You’ll Love",
    subtitle: "Consistency made effortless",
    description:
      "No pills. No water. No missed days. Just one delicious daily ritual.",
    buttonText: "Explore the Collection",
    imageSrc: "/images/wellnessBG.jpg",
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

      <img
        key={slide.imageSrc}
        src={slide.imageSrc}
        alt={slide.title}
        className="hero-image-background fade-video"
      />

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

        <button className={`hero-cta-button ${lineVisibility.button ? 'is-visible' : ''}`}>
          {slide.buttonText}
        </button>
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