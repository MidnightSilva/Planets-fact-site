import PlanetLink from "../components/PlanetLink";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/PlanentDes";
import saturn from "../assets/planet-saturn.svg";
import saturnInternal from "../assets/planet-saturn-internal.svg";
import saturnSurface from "../assets/geology-saturn.svg";
import PlanetCards from "../components/PlanetCard";
import MobileSaturnBtn from "../Layout/Btns/MobileBtn/MobileSaturnBtn";
import BtnSaturn from "../Layout/Btns/Btns/BtnSaturn";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Saturn = () => {
  const { count } = useContext(PlanetContext);
       
  return (
    <div className="page-container">
      <div className="Layout">
        <MobileSaturnBtn />
        {(count === 1 && <PlanetImage className="planet" image={saturn} />) ||
          (count === 2 && (
            <PlanetImage className="planet" image={saturnInternal} />
          )) ||
          (count === 3 && (
            <PlanetImage className="planet-surface" image={saturnSurface} />
          ))}
        <div className="planet-des--btn-container">
          <div className="planet-des-wiki-container">
            {(count === 1 && (
              <PlanetDes
                title="Saturn"
                des="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
              />
            )) ||
              (count === 2 && (
                <PlanetDes
                  title="Saturn"
                  des="Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
                />
              )) ||
              (count === 3 && (
                <PlanetDes
                  title="Saturn"
                  des="The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
                />
              ))}
            {(count === 1 && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Saturn" />
            )) ||
              (count === 2 && (
                <PlanetLink href="https://en.wikipedia.org/wiki/Saturn#Internal_structure" />
              )) ||
              (count === 3 && (
                <PlanetLink href="https://en.wikipedia.org/wiki/Saturn#Atmosphere" />
              ))}
          </div>
          <BtnSaturn className="btn-tablet-container-s" />
        </div>
      </div>
      <div className="planet-cards-container">
        <PlanetCards title="Rotation Time" des="10.8 Hours" />
        <PlanetCards title="Revolution Time" des="29.46 Years" />
        <PlanetCards title="Radius" des="58,232 Km" />
        <PlanetCards title="Average Temp." des="-138 C" />
      </div>
    </div>
  );
};

export default Saturn;
