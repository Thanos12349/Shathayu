import React, { useState } from "react";
import "../Styles/GoogleReviews.css";

const reviews = [
  {
    name: "Suresh NA",
    time: "1 year ago",
    text: "Very good ayurveda and yoga treatment centre, situated on Nandi hills road after Devanahalli town.",
    rating: 4,
    image: "/images/testi.png",
  },
  {
    name: "Vedant Rao",
    time: "1 year ago",
    text: "Had an amazing experience at this retreat for the last two weeks. Left the retreat very rejuvenated and grateful.",
    rating: 5,
    image: "/images/testi.png",
  },
  {
    name: "Satish Gupta",
    time: "1 year ago",
    text: "A very good peaceful place to spend time in the lap of nature. A quiet place situated on the bank of a river.",
    rating: 5,
    image: "/images/testi.png",
  },
  {
    name: "Anu Saini",
    time: "1 year ago",
    text: "Had visited this place with my friends over the weekend. Very calm and peaceful.",
    rating: 4,
    image: "/images/testi.png",
  },
  {
    name: "Thavamani Koti",
    time: "1 year ago",
    text: "Amazing place and people. The treatment helped me to refresh completely from inside out.",
    rating: 5,
    image: "/images/testi.png",
  },
  {
    name: "Rahul Sharma",
    time: "1 year ago",
    text: "Great experience overall, peaceful environment and excellent hospitality.",
    rating: 5,
    image: "/images/testi.png",
  },
  {
    name: "Thavamani Koti",
    time: "1 year ago",
    text: "Amazing place and people. The treatment helped me to refresh completely from inside out.",
    rating: 5,
    image: "/images/testi.png",
  },
  {
    name: "Rahul Sharma",
    time: "1 year ago",
    text: "Great experience overall, peaceful environment and excellent hospitality.",
    rating: 5,
    image: "/images/testi.png",
  },
];

const GoogleReviews = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < reviews.length - 5) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="google-review-section">
      <h2 className="review-title1">Our Google Reviews</h2>
      <p className="review-subtitle">
        Hear from our clients about the impact our programs have made on their journey
      </p>

      <div className="carousel-container">
        <div className="nav-button left" onClick={next}>
          &#10094;
        </div>

        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 20.25}%)` }}
          >
            {reviews.map((review, i) => (
              <div className="review-card" key={i}>
                <div className="review-header">
                  <img src={review.image} alt={review.name} className="review-img" />
                </div>

                <div className="review-stars">
                   <h4>{review.name}</h4>
                  <p className="review-time">{review.time}</p>
                  {"⭐".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="nav-button right" onClick={prev}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
