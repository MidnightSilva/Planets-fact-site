import { useState } from "react";
import Button from "../components/Button";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import saturn from "../assets/planet-saturn.svg";
import saturnInternal from "../assets/planet-saturn-internal.svg";
import saturnSurface from "../assets/geology-saturn.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";

const Saturn = () => {
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
      {(Overview === true && <PlanetImage image={saturn} />) ||
        (Structure === false && <PlanetImage image={saturnInternal} />) ||
        (Surface === true && <PlanetImage image={saturnSurface} />)}
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

      <PlanetFactCards />
    </div>
  );
};

export default Saturn;
