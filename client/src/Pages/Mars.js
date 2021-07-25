import { useState } from "react";
import Button from "../components/Button";

import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import mars from "../assets/planet-mars.svg";
import marsInternal from "../assets/planet-mars-internal.svg";
import marsSurface from "../assets/geology-mars.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
const Mars = () => {
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

      <PlanetFactCards />
    </div>
  );
};

export default Mars;
