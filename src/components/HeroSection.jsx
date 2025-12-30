import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css';

const heroContent = [
  {
    title: "Seyraya",
    subtitle: "The pure source of spiritual insight and holistic wellbeing",
    description: "Experience a unique blend of nature and wellness.",
    buttonText: "Contact Us",
    imageSrc: "/images/banner-1-scaled.jpg",
  },
  {
    title: "Holistic Wellness",
    subtitle: "A path that guides you toward inner balance",
    description: "Our Ayurveda expert will connect with you shortly with personalised guidance.  ",
    buttonText: "Book Now",
    imageSrc: "/images/banner-4-scaled.jpg",
  },
  {
    title: "Nature Heals",
    subtitle: "A path that guides you toward inner balance",
    description: "Surrounded by nature, guided by experts.",
    buttonText: "Explore",
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

      {/* Background IMAGE instead of video */}
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
    </section>
  );
};

export default HeroSection;
