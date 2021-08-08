import PlanetImage from "../components/PlanetImage";
import PlanetLink from "../components/PlanetLink";
import PlanetDes from "../components/PlanentDes";
import neptune from "../assets/planet-neptune.svg";
import neptuneInternal from "../assets/planet-neptune-internal.svg";
import neptuneSurface from "../assets/geology-neptune.svg";
import PlanetCards from "../components/PlanetCard";
import { useContext} from "react";
import { PlanetContext } from "../Context/AppContext";
const Neptune = () => {
  
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
      {(Overview === true && <PlanetImage image={neptune} />) ||
        (Structure === false && <PlanetImage image={neptuneInternal} />) ||
        (Surface === true && <PlanetImage image={neptuneSurface} />)}

      {(Overview === true && (
        <PlanetDes
          title="Neptune"
          des="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Neptune"
            des="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Neptune"
            des="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
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
      <PlanetCards title="Rotation Time" des="16.08 Hours" />
      <PlanetCards title="Revolution Time" des="164.79 Years" />
      <PlanetCards title="Radius" des="24,622 Km" />
      <PlanetCards title="Average Temp." des="-201 c" />
    </div>
  );
};
export default Neptune;
