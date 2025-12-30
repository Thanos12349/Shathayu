import React from "react";
import '../Styles/OurStory.css';

export default function OurStory() {
  return (
    <section className="ourstory-section">
      <div className="ourstory-container">

        {/* Section Label */}
        <p className="ourstory-label">Behind Seyraya </p>

        {/* Main Heading */}
        <h1 className="ourstory-heading">
          Be Transformed at India’s Finest Wellness Destination
        </h1>

        {/* Sub Heading */}
        <p className="ourstory-subheading">
          {/* Seyraya is the holistic amalgamation of the atma {"{soul}"}, mana
          {" {mind}"} and tann {"{body}"}. */}
        </p>

        {/* Content Grid */}
        <div className="ourstory-grid">

          {/* Left Content */}
          <div className="ourstory-text">
            <p>
             Seyraya is a sanctuary where ancient healing meets modern care. Rooted in the timeless wisdom of Ayurveda and supported by evidence-based wellness sciences, Seyraya was created with one purpose — to help individuals heal deeply, live consciously, and transform their wellbeing from the inside out. 
            </p>

            <p>
              We believe that true healing is not a treatment, but a journey. 
A journey that requires nurture, personalization, and an environment that restores balance naturally. At Seyraya, every program, therapy, and experience is thoughtfully designed to bring harmony to the mind, body, and spirit. 
            </p>
          </div>

          {/* Right Content */}
          <div className="ourstory-text">
            <p>
              The <strong>FOUNDERS</strong> are health & fitness oriented
              visionaries who have conceptualised Atmantan as the ultimate
              wellness pit stop for people looking to scale new personal heights
              of wellness.
            </p>

            <p>
              Sharmilee Kapur as a pranic healer brings energy medicine and
              conviction to Atmantan. <span className="highlight">
              Nikhil Kapur</span> is a fitness enthusiast & an ironman
              triathlete, who brings methodical planning & the drive for
              excellence.
            </p>
          </div>


        </div>
        
            <div className="ourstory-cards">

                <div className="story-card">
                    <img src="/images/tuhit14.jpeg" alt="Ecology" />
                    <span>ATMANTAN &<br />ECOLOGY</span>
                </div>

                <div className="story-card">
                    <img src="/images/tuhit16.jpeg" alt="Founder" />
                    <span>FOUNDER’S<br />NOTE</span>
                </div>

                <div className="story-card">
                    <img src="/images/tuhit12.jpeg" alt="Artist" />
                    <span>ARTIST’S<br />IMPRESSION</span>
                </div>

                </div>
      </div>
    </section>
  );
}
