import PlanetLink from "../components/PlanetLink";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/PlanentDes";
import mars from "../assets/planet-mars.svg";
import marsInternal from "../assets/planet-mars-internal.svg";
import marsSurface from "../assets/geology-mars.svg";
import PlanetCards from "../components/PlanetCard";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Mars = () => {
  const {
    togglePlanetDescription,
    toggleStructureDescription,
    toggleSurfaceDescription,
    Overview,
    Structure,
    Surface,
  } = useContext(PlanetContext);

  return (
    <div className="page-container">
      <div className="btn-container">
        <button
          className="planet-btn"
          onClick={() => togglePlanetDescription(!togglePlanetDescription)}
        >
          Overview
        </button>
        <button
          className="planet-btn"
          onClick={() =>
            toggleStructureDescription(!toggleStructureDescription)
          }
        >
          Structure
        </button>
        <button
          className="planet-btn"
          onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
        >
          Surface
        </button>
      </div>
      {(Overview === true && <PlanetImage image={mars} />) ||
        (Structure === false && <PlanetImage image={marsInternal} />) ||
        (Surface === true && <PlanetImage image={marsSurface} />)}

      {(Overview === true && (
        <PlanetDes
          title="Mars"
          des="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet."
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Mars"
            des="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Mars"
            des="Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
          />
        ))}
      {(Overview === true && (
        <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)" />
      )) ||
        (Structure === false && (
          <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure" />
        )) ||
        (Surface === true && (
          <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology" />
        ))}
      <PlanetCards title="Rotation Time" des="1.03 Days" />
      <PlanetCards title="Revolution Time" des="1.88 Years" />
      <PlanetCards title="Radius" des="3,389.5 Km" />
      <PlanetCards title="Average Temp." des="-28 C" />
      <div className="space" />
    </div>
  );
};

export default Mars;
