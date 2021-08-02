
// import Button from "../components/Button";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import earth from "../assets/planet-earth.svg";
import earthInternal from "../assets/planet-earth-internal.svg";
import earthSurface from "../assets/geology-earth.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
import { useState} from "react";
// import { PlanetContext } from "../Context/AppContext";
// import { useContext } from "react";

const Earth = (props) => {

  
    const [Overview, setOverview] = useState(true);
    const [Structure, setStructure] = useState(true);
    const [Surface, setSurface] = useState(true);
  const togglePlanetDescription = () => {
    Overview ? setOverview(true) : setOverview(true);
    Structure ? setStructure(true) : setStructure(true);
    Surface ? setSurface(false) : setSurface(false);
  };

  const toggleStructureDescription = () => {
    Overview ? setOverview(false) : setOverview(false);
    Structure ? setStructure(false) : setStructure(false);
    Surface ? setSurface(false) : setSurface(false);
  };

  const toggleSurfaceDescription = () => {
    Overview ? setOverview(false) : setOverview(false);
    Structure ? setStructure(true) : setStructure(true);
    Surface ? setSurface(true) : setSurface(true);
  };
  // const {
  //   togglePlanetDescription,
  //   toggleStructureDescription,
  //   toggleSurfaceDescription,
  //   Overview,
  //   Structure,
  //   Surface,
  // } = useContext(PlanetContext);
 

  return (
    <div className="page-container">
      <div onClick={() => togglePlanetDescription(!togglePlanetDescription)}>
        <button
          onClick={() => togglePlanetDescription(!togglePlanetDescription)}
        >
          Overview
        </button>
        <button
          onClick={() =>
            toggleStructureDescription(!toggleStructureDescription)
          }
        >
          Structure
        </button>
        <button
          onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
        >
          Surface
        </button>
      </div>
      {(Overview === true && <PlanetImage image={earth} />) ||
        (Structure === false && <PlanetImage image={earthInternal} />) ||
        (Surface === true && <PlanetImage image={earthSurface} />)}
      {(Overview === true && (
        <PlanetDes
          title="Earth"
          des="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Earth"
            des="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Earth"
            des="The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
          />
        ))}

      <PlanetFactCards />
    </div>
  );
};

export default Earth;
