import PlanetLink from "../components/PlanetLink";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/PlanentDes";
import earth from "../assets/planet-earth.svg";
import earthInternal from "../assets/planet-earth-internal.svg";
import earthSurface from "../assets/geology-earth.svg";
import PlanetCards from "../components/PlanetCard";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";
import MobileEarthBtn from "../Layout/Btns/MobileBtn/MobileEarthBtn";
import BtnEarth from "../Layout/Btns/Btns/BtnEarth";

const Earth = (props) => {
  const { count } = useContext(PlanetContext);

  return (
    <div className="page-container">
      {/* // buttons could be made into a component and import in here twice  */}
      <div className="Layout">
        <MobileEarthBtn />
        {(count === 1 && <PlanetImage className="planet" image={earth} />) ||
          (count === 2 && (
            <PlanetImage className="planet" image={earthInternal} />
          )) ||
          (count === 3 && (
            <PlanetImage className="planet-surface" image={earthSurface} />
          ))}
        <div className="planet-des--btn-container">
          <div className="planet-des-wiki-container">
            {(count === 1 && (
              <PlanetDes
                title="Earth"
                des="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
              />
            )) ||
              (count === 2 && (
                <PlanetDes
                  title="Earth"
                  des="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
                />
              )) ||
              (count === 3 && (
                <PlanetDes
                  title="Earth"
                  des="The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
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
          <BtnEarth />
        </div>
      </div>
      <div className="planet-cards-container">
        <PlanetCards title="Rotation Time" des=".99 Days" />
        <PlanetCards title="Revolution Time" des="365.26 Days" />
        <PlanetCards title="Radius" des="6,371 Km" />
        <PlanetCards title="Average Temp." des="16 C" />
      </div>
    </div>
  );
};

export default Earth;
