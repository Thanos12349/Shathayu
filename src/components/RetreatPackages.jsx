import React from "react";
import "../Styles/RetreatPackages.css";

const RetreatPackages = () => {

  const retreats = [
    {
      img: "/images/offe.png",
      title: "Stress Relief & Sleep Program ",
      description:
        "Rebalance your mind and body with calming Ayurvedic therapies designed to relieve stress, reduce anxiety, and restore deep, natural sleep mind and emotions into perfect alignment",
      nights: "3 Days"
    },
    {
      img: "/images/offe.png",
      title: "Pain Management Program ",
      description:
        "A targeted healing program that uses Ayurveda, massage therapies, and corrective treatments to ease chronic pain,   improve mobility, and support long-term relief.   ",
      nights: "5 Days"
    },
    {
      img: "/images/offe.png",
      title: "Weight Loss & Metabolic Reset ",
      description:
        "A gentle yet effective Ayurvedic approach to detox, fat reduction, and metabolism correction through diet, therapies, and lifestyle guidance and Nature-driven rejuvenation. ",
      nights: "7 Days"
    },
    {
      img: "/images/offe.png",
      title: "Panchakarma",
      description:
        "Deep cleansing therapy that removes toxins, restores digestion, strengthens immunity, and rejuvenates body and mind. Ideal for: Detox, chronic fatigue, weight loss, skin & hormonal disorders. ",
      nights: "7 Days"
    }
  ];

  return (
    <section className="retreat-section">
      <div className="retreat-container">

        <div className="retreat-container1">
          <h2 className="retreat-heading">Our Retreat Packages</h2>
        </div>

        <div className="retreat-grid">
          {retreats.map((item, index) => (
            <div className="retreat-card" key={index}>
              <div className="retreat-card-inner">

                <div className="retreat-card-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="retreat-card-content">
                  <h3 className="retreat-card-title">{item.title}</h3>

                  <p className="retreat-card-desc">{item.description}</p>

                  <div className="retreat-card-footer">
                    <span className="retreat-card-duration">
                      Starts from {item.nights}
                    </span>

                    <button className="retreat-card-btn">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RetreatPackages;
