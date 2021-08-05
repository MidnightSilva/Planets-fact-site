import PlanetImage from "../components/PlanetImage";
import PlanetLink from "../components/PlanetLink";
import PlanetDes from "../components/Card";
import jupiter from "../assets/planet-jupiter.svg";
import jupiterInternal from "../assets/planet-jupiter-internal.svg";
import jupiterSurface from "../assets/geology-jupiter.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";


const Jupiter = () => {

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
      <div>
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
      {(Overview === true && <PlanetImage image={jupiter} />) ||
        (Structure === false && <PlanetImage image={jupiterInternal} />) ||
        (Surface === true && <PlanetImage image={jupiterSurface} />)}
      {(Overview === true && (
        <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)" />
      )) ||
        (Structure === false && (
          <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure" />
        )) ||
        (Surface === true && (
          <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology" />
        ))}
      {(Overview === true && (
        <PlanetDes
          title="Jupiter"
          des="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Jupiter"
            des="When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Jupiter"
            des="The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
          />
        ))}

      <PlanetFactCards />
    </div>
  );
};
export default Jupiter;
