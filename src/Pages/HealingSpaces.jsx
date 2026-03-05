import "./HealingSpaces.css";
import Header from "../components/Header";
import PropHeroSection from "../components/PropHeroSection";
import Footer from "../components/Footer";

const wellnessPackages = [
  {
    title: "Stress Relief & Sleep Program",
    duration: "Starts from: 3 Days",
    description:
      "Rebalance your mind and body with calming Ayurvedic therapies designed to relieve stress, reduce anxiety, and restore deep, natural sleep.",
  },
  {
    title: "Pain Management Program",
    duration: "Starts from: 5 Days",
    description:
      "A targeted healing program that uses Ayurveda, massage therapies, and corrective treatments to ease chronic pain, improve mobility, and support long-term relief.",
  },
  {
    title: "Weight Loss & Metabolic Reset",
    duration: "Starts from: 7 Days",
    description:
      "A gentle yet effective Ayurvedic approach to detox, fat reduction, and metabolism correction through diet, therapies, and lifestyle guidance.",
  },
  {
    title: "Panchakarma",
    duration: "Starts from: 7 Days",
    description:
      "Deep cleansing therapy that removes toxins, restores digestion, strengthens immunity, and rejuvenates body and mind. Ideal for detox, chronic fatigue, weight loss, skin & hormonal disorders.",
  },
];

const HealingSpaces = () => {
  return (
    <>
    <Header/>
    <PropHeroSection
        title="Our Healing Space"
        description="Personalized physiotherapy programs designed to restore mobility, reduce pain, and improve your quality of life."
        image="/images/tuhit18.jpeg"
      />


    <div className="hs-page">

      {/* ===== OUR HEALING SPACES ===== */}
      <section className="hs-section">
        <h1 className="hs-heading">OUR HEALING SPACES</h1>

        <div className="hs-location-row">
          <div className="hs-location-card">
            <img src="/images/tuhitu22.jpeg" alt="Solan" />
            <span>Solan</span>
          </div>

          <div className="hs-arrow">→</div>

          <div className="hs-location-card">
            <img src="/images/tuhit14.jpeg" alt="Panchkula" />
            <span>Panchkula</span>
          </div>
        </div>
      </section>

      {/* ===== WELLNESS PACKAGES ===== */}
      <section className="wp-section">
        <h2 className="wp-heading">Wellness Packages</h2>

        <div className="wp-grid">
          {wellnessPackages.map((pkg, index) => (
            <div className="wp-flip-card" key={index}>
              <div className="wp-card-inner">

                {/* Front */}
                <div className="wp-card-front">
                  
                  <h3>{pkg.title}</h3>
                  <p>{pkg.duration}</p>
                </div>

                {/* Back */}
                <div className="wp-card-back">
                  <p>{pkg.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
    <Footer/>
        </>
  );
};

export default HealingSpaces;
