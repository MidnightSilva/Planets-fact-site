import PlanetArrowLink from "../assets/planetlinkarrow.svg";

const PlanetLink = (props) => {
  return (
    <div>
      <span>Source</span>
      <a href={props.href} rel="noreferrer">
        Wikipedia
      </a>
      <img src={PlanetArrowLink} alt="arrow"/>
    </div>
  );
};

export default PlanetLink