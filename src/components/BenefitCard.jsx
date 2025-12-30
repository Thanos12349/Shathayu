import "../Styles/BenefitCard.css";

const BenefitCard = ({ benefit }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">✓</div>
      <p className="benefit-text">{benefit}</p>
    </div>
  );
};

export default BenefitCard;
