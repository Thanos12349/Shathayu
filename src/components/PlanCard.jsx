import "../Styles/PlanCard.css";

const PlanCard = ({ title, description, highlight }) => {
  return (
    <div className={`plan-card ${highlight ? "plan-active" : ""}`}>
      <h3 className="plan-title">{title}</h3>
      <p className="plan-desc">{description}</p>
    </div>
  );
};

export default PlanCard;
