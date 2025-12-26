import React from "react";
import "../Styles/RetreatPackages.css";

const RetreatPackages = () => {
  const retreats = [
    {
      img: "/images/offe.png",
      title: "Residential wellness packages",
      points: [
        "Perfect for those seeking a long-stay rejuvenation experience or a peaceful staycation in nature’s embrace.",
        "Each retreat is thoughtfully curated to help guests rest deeply, heal naturally, and rediscover inner balance."
      ]
    },
    {
      img: "/images/offe.png",
      title: "Detox Retreat",
      points: [
        "Ayurveda Detox enhances metabolism, alleviates disease conditions and nourishes the body.",
        "Intense detox methods work at the cellular level, restoring balance and boosting healing."
      ]
    },
    {
      img: "/images/offe.png",
      title: "Woman Wellness Retreat",
      points: [
        "Supports women’s health: hormonal balance, skin care, joints, digestion, and menstrual well-being.",
        "Helps release emotional stress, unwind deeply, recharge and revive from within."
      ]
    },
    {
      img: "/images/offe.png",
      title: "Stress Relief Retreat",
      points: [
        "Includes detailed assessments to identify root causes of chronic stress.",
        "Yoga, pranayama, meditation, Ayurveda therapy, herbal pack, beauty therapy, music therapy & more."
      ]
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
            <div key={index} className="retreat-card">
              <div className="retreat-image-wrapper">
                <img src={item.img} alt={item.title} className="retreat-img" />
              </div>

              <div className="retreat-content">
                <h3 className="retreat-title">{item.title}</h3>

                <ul className="retreat-list">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>

                <button className="retreat-btn">Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatPackages;
