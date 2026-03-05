import "../Styles/InfoBlock.css";

const InfoBlock = ({ text }) => {
  return (
    <div className="info-block">
      <p>{text}</p>
    </div>
  );
};

export default InfoBlock;
