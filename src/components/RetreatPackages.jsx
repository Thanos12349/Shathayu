import React from "react";
import "../Styles/RetreatPackages.css";

const RetreatPackages = () => {
  const retreats = [
    {
      img: "/images/rejuvenation.jpg",
      title: "Rejuvenation Retreat",
      points: [
        "Rejuvenation therapies have anti-aging effects as they detoxify the body and boost metabolism and immunity.",
        "It includes a well-structured series of sessions of yoga, meditation, naturopathy, pranayama, beauty therapy, etc."
      ]
    },
    {
      img: "/images/detox.jpg",
      title: "Detox Retreat",
      points: [
        "Ayurveda Detox enhances metabolism, alleviates disease conditions and nourishes the body.",
        "Intense detox methods work at the cellular level, allowing your body’s biological systems to return to a state of balance and healing."
      ]
    },
    {
      img: "/images/woman-wellness.jpg",
      title: "Woman Wellness Retreat",
      points: [
        "Addresses the unique needs of women’s health, including hormonal changes, sexual health, skin care, bone and joint well-being, and menstrual concerns.",
        "The program aims to release emotional stress by enabling them to unwind, recharge and revive themselves."
      ]
    },
    {
      img: "/images/stress-relief.jpg",
      title: "Stress Relief Retreat",
      points: [
        "The program involves personalised detailed physical and mental assessments to understand the cause of chronic stress.",
        "Combination of yoga, pranayama, meditation, Ayurveda therapy, herbal body pack, beauty therapy, music therapy, etc."
      ]
    }
  ];

  return (
    <section className="retreat-section text-center">
      <h2 className="retreat-heading">Our Retreat Packages</h2>
      <div className="container">
        <div className="row justify-content-center">
          {retreats.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4 d-flex">
              <div className="card retreat-card shadow-sm flex-fill">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <ul className="card-text text-start">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button className="btn btn-success retreat-btn">
                      Know More
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
