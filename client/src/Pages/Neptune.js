import PlanetImage from "../components/PlanetImage";
import PlanetLink from "../components/PlanetLink";
import PlanetDes from "../components/PlanentDes";
import neptune from "../assets/planet-neptune.svg";
import neptuneInternal from "../assets/planet-neptune-internal.svg";
import neptuneSurface from "../assets/geology-neptune.svg";
import PlanetCards from "../components/PlanetCard";
import MobileButtons from "../components/mobileButtons";
import Buttons from "../components/buttons";
import { useContext} from "react";
import { PlanetContext } from "../Context/AppContext";
const Neptune = () => {
  
  const { count } = useContext(PlanetContext);

  return (
    <div className="page-container">
      <MobileButtons />
      {(count === 1 && <PlanetImage className="planet" image={neptune} />) ||
        (count === 2 && (
          <PlanetImage className="planet" image={neptuneInternal} />
        )) ||
        (count === 3 && (
          <PlanetImage className="planet-surface" image={neptuneSurface} />
        ))}
      <div className="planet-des--btn-container">
        <div className="planet-des-wiki-container">
          {(count === 1 && (
            <PlanetDes
              title="Neptune"
              des="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
            />
          )) ||
            (count === 2 && (
              <PlanetDes
                title="Neptune"
                des="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
              />
            )) ||
            (count === 3 && (
              <PlanetDes
                title="Neptune"
                des="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
              />
            ))}
          {(count === 1 && (
            <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)" />
          )) ||
            (count === 2 && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure" />
            )) ||
            (count === 3 && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology" />
            ))}
        </div>
        <Buttons />
      </div>
      <div className="planet-cards-container">
        <PlanetCards title="Rotation Time" des="16.08 Hours" />
        <PlanetCards title="Revolution Time" des="164.79 Years" />
        <PlanetCards title="Radius" des="24,622 Km" />
        <PlanetCards title="Average Temp." des="-201 c" />
      </div>
    </div>
  );
};
export default Neptune;
