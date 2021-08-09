import PlanetLink from "../components/PlanetLink";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/PlanentDes";
import saturn from "../assets/planet-saturn.svg";
import saturnInternal from "../assets/planet-saturn-internal.svg";
import saturnSurface from "../assets/geology-saturn.svg";
import PlanetCards from "../components/PlanetCard";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Saturn = () => {
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
      {(Overview === true && (
        <PlanetImage className="planet" image={saturn} />
      )) ||
        (Structure === false && (
          <PlanetImage className="planet" image={saturnInternal} />
        )) ||
        (Surface === true && (
          <PlanetImage className="planet-surface" image={saturnSurface} />
        ))}

      {(Overview === true && (
        <PlanetDes
          title="Saturn"
          des="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Saturn"
            des="Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Saturn"
            des="The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
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
      <PlanetCards title="Rotation Time" des="10.8 Hours" />
      <PlanetCards title="Revolution Time" des="29.46 Years" />
      <PlanetCards title="Radius" des="58,232 Km" />
      <PlanetCards title="Average Temp." des="-138 C" />
    </div>
  );
};

export default Saturn;
