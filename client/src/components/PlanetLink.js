import PlanetArrowLink from "../assets/planetlinkarrow.svg";

const PlanetLink = (props) => {
  return (
    <div className="link-container-outside">
      <span className="link-source">Source : </span>
      <a className="link" href={props.href} rel="noreferrer">
        Wikipedia
      </a>
      <img className="arrow-link" src={PlanetArrowLink} alt="arrow"/>
    </div>
  );
};

export default PlanetLink