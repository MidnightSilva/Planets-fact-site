import PlanetLink from "../components/PlanetLink";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/PlanentDes";
import earth from "../assets/planet-earth.svg";
import earthInternal from "../assets/planet-earth-internal.svg";
import earthSurface from "../assets/geology-earth.svg";
import PlanetCards from "../components/PlanetCard";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";
import MobileButtons from "../components/mobileButtons";
import Buttons from "../components/buttons";

const Earth = (props) => {
  const {
    Overview,
    Structure,
    Surface,
  } = useContext(PlanetContext);

  return (
    <div className="page-container">
      {/* // buttons could be made into a component and import in here twice  */}
      <MobileButtons />
      {(Overview === true && (
        <PlanetImage className="planet" image={earth} />
      )) ||
        (Structure === false && (
          <PlanetImage className="planet" image={earthInternal} />
        )) ||
        (Surface === true && (
          <PlanetImage className="planet-surface" image={earthSurface} />
        ))}
      <div className="planet-des--btn-container">
        <div className="planet-des-wiki-container">
          {(Overview === true && (
            <PlanetDes
              title="Earth"
              des="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
            />
          )) ||
            (Structure === false && (
              <PlanetDes
                title="Earth"
                des="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
              />
            )) ||
            (Surface === true && (
              <PlanetDes
                title="Earth"
                des="The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
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
        </div>
      <Buttons/>
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
