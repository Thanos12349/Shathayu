import "../Styles/SectionHeader.css";

const SectionHeader = ({ title, subtitle, Desc }) => {
  return (
    <div className="section-header">
      {subtitle && <span className="section-header-subtitle">{subtitle}</span>}
      <h2 className="section-header-title">{title}</h2>
      {Desc && <p className="section-header-desc">{Desc}</p>}
    </div>
  );
};

export default SectionHeader;
