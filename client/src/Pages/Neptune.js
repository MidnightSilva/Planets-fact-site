import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import neptune from "../assets/planet-neptune.svg";
import neptuneInternal from "../assets/planet-neptune-internal.svg";
import neptuneSurface from "../assets/geology-neptune.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
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
      <div>
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

      <PlanetFactCards />
    </div>
  );
};
export default Neptune;
