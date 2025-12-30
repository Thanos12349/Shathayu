import React from "react";
import "../Styles/Cusine.css";

const CuisinePhilosophy = () => {
  return (
    <section className="cuisine-section">
      <div className="cuisine-container">
        {/* LEFT CONTENT */}
        <div className="cuisine-left">
          <p className="cuisine-subtitle">The Heart of Seyraya </p>
          <div className="veg-icon">
            <span className="leaf">🌿</span>
            <span className="veg-text">VEGETARIAN</span>
          </div>

          <h1 className="cuisine-heading">
            Let food be thy <br />
            medicine, and <br />
            medicine be thy <br />
            food
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="cuisine-right">
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
            alt="Wellness Cuisine"
          />
        </div>
      </div>
    </section>
  );
};

export default CuisinePhilosophy;
