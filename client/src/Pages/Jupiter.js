import PlanetImage from "../components/PlanetImage";
import PlanetLink from "../components/PlanetLink";
import PlanetDes from "../components/PlanentDes";
import jupiter from "../assets/planet-jupiter.svg";
import jupiterInternal from "../assets/planet-jupiter-internal.svg";
import jupiterSurface from "../assets/geology-jupiter.svg";
import PlanetCards from "../components/PlanetCard";
import MobileButtons from "../components/mobileButtons";
import Buttons from "../components/buttons";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";



const Jupiter = () => {

  const { count } = useContext(PlanetContext);

   
  return (
    <div className="page-container">
      <div className="Layout">
        <MobileButtons />
        {(count === 1 && <PlanetImage className="planet" image={jupiter} />) ||
          (count === 2 && (
            <PlanetImage className="planet" image={jupiterInternal} />
          )) ||
          (count === 3 && (
            <PlanetImage className="planet-surface" image={jupiterSurface} />
          ))}
        <div className="planet-des--btn-container">
          <div className="planet-des-wiki-container">
            {(count === 1 && (
              <PlanetDes
                title="Jupiter"
                des="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
              />
            )) ||
              (count === 2 && (
                <PlanetDes
                  title="Jupiter"
                  des="When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
                />
              )) ||
              (count === 3 && (
                <PlanetDes
                  title="Jupiter"
                  des="The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
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
          <Buttons className="btn-tablet-container-j" />
        </div>
      </div>
      <div className="planet-cards-container">
        <PlanetCards title="Rotation Time" des="9.93 Hours" />
        <PlanetCards title="Revolution Time" des="11.86 Years" />
        <PlanetCards title="Radius" des="69,911 Km" />
        <PlanetCards title="Average Temp." des="-108 C" />
      </div>
    </div>
  );
};
export default Jupiter;
