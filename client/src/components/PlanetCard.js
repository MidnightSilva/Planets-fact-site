
const PlanetCard = (props) => {
  return (
    <div className="planet-Card-container">
      <h2 className="planet-card-name">{props.title}</h2>
      <p className="planet-card-info">{props.des}</p>
    </div>
  );
};

export default PlanetCard;