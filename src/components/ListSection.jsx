import "../Styles/ListSection.css";

const ListSection = ({ items }) => {
  return (
    <div className="ListImage">
      


    <ul className="list-3d">
      {items.map((item, index) => (
        <li className="list-3d-item" key={index}>
          <span className="list-3d-bullet"></span>
          <span className="list-3d-text">{item}</span>
        </li>
      ))}
    </ul>
        </div>
  );
};

export default ListSection;
