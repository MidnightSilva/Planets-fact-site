import { useState } from "react";
import Button from "../components/Button";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import jupiter from "../assets/planet-jupiter.svg";
import jupiterInternal from "../assets/planet-jupiter-internal.svg";
import jupiterSurface from "../assets/geology-jupiter.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
const Jupiter = () => {
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

  return (
    <div className="page-container">
      <div>
        <Button
          onClick={() => togglePlanetDescription(!togglePlanetDescription)}
          name="Overview"
        />
        <Button
          onClick={() =>
            toggleStructureDescription(!toggleStructureDescription)
          }
          name="Structure"
        />
        <Button
          onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
          name="Surface"
        />
      </div>
      {(Overview === true && <PlanetImage image={jupiter} />) ||
        (Structure === false && <PlanetImage image={jupiterInternal} />) ||
        (Surface === true && <PlanetImage image={jupiterSurface} />)}
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
