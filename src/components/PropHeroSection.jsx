import "../Styles/PropHeroSection.css";

const PropHeroSection = ({ title, description, image }) => {
  return (
    <section
      className="prop-hero-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="prop-hero-overlay"></div>

      <div className="prop-hero-container">
        <div className="prop-hero-content">
          <h1 className="prop-hero-title">{title}</h1>
          <p className="prop-hero-desc">{description}</p>
          <button className="prop-hero-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PropHeroSection;
