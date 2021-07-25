import { useState } from "react";
import Button from "../components/Button";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import venus from "../assets/planet-venus.svg";
import venusInternal from "../assets/planet-venus-internal.svg";
import venusSurface from "../assets/geology-venus.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
const Venus = () => {
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
      {" "}
      <div
      >
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
      {(Overview === true && <PlanetImage image={venus} />) ||
        (Structure === false && <PlanetImage image={venusInternal} />) ||
        (Surface === true && <PlanetImage image={venusSurface} />)}
      {(Overview === true && (
        <PlanetDes
          title="Venus"
          des="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Venus"
            des="The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Venus"
            des="Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
          />
        ))}
      <PlanetFactCards />
    </div>
  );
};

export default Venus;
