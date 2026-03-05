import React, { useState } from "react";
import '../Styles/CenterSection.css'; 

const slides = [
  {
    image: "/images/e.png",
    title: "Wellness Packages  ",
    text: "The Wellness Pavilion is where you attend holistic activities and are prescribed therapies upon Doctors' consultation."
  },
  {
    image: "/images/f.png",
    title: "HOLISTIC HEALING",
    text: "Experience authentic therapies combined with modern wellness science."
  },
  {
    image: "/images/l.png",
    title: "NATURE & TRANQUILITY",
    text: "Find peace in lush nature with a stunning valley and lake view."
  }
];

export default function CentreSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <section className="centre-section">
      {/* LEFT TEXT SECTION */}
      <div className="centre-text">
        <h1>OUR HEALING SPACES</h1>
        <h2>
          Nestled on a unique crystal hill, spanning 42 acres of lush green
          valley, Atmantan has its abode in the Majestic Sahyadris, overlooking
          the pristine Mulshi Lake.
        </h2>
      </div>

      {/* RIGHT SLIDER SECTION */}
      <div className="centre-slider">

        <button className="arrow left" onClick={prevSlide}>←</button>

        <div className="slider-content">
          <img src={slides[index].image} className="slider-img" alt="wellness" />

          <div className="slider-box">
            <h3>{slides[index].title}</h3>
            <p>{slides[index].text}</p>
          </div>

          <div className="dots">
            {slides.map((_, i) => (
              <span key={i} className={i === index ? "dot active" : "dot"} />
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>→</button>
      </div>
    </section>
  );
}
