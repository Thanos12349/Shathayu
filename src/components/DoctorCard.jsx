import React, { useState } from "react";
import "../Styles/DoctorCard.css";

const DoctorCard = ({ image, name, title, experience, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="doctor-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>

      <div className="card-content">
        <h2>{name}</h2>
        <p>{title} |</p>
        <p>{experience}</p>
        <button className="watch-btn">Watch Video</button>
      </div>

      {showDescription && (
        <div className="card-description">
          <p>{description}</p>
        </div>
      )}

      <div className="card-footer">
        <button className="know-more-btn" onClick={toggleDescription}>
          {showDescription ? "Hide Details ▲" : "Know More ⌄"}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
