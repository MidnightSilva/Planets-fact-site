import PlanetLink from "../components/PlanetLink";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/PlanentDes";
import mars from "../assets/planet-mars.svg";
import marsInternal from "../assets/planet-mars-internal.svg";
import marsSurface from "../assets/geology-mars.svg";
import PlanetCards from "../components/PlanetCard";
import MobileButtons from "../components/mobileButtons";
import Buttons from "../components/buttons";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Mars = () => {
const { count } = useContext(PlanetContext);

  return (
    <div className="page-container">
      <MobileButtons />
      {(count === 1 && <PlanetImage className="planet" image={mars} />) ||
        (count === 2 && (
          <PlanetImage className="planet" image={marsInternal} />
        )) ||
        (count === 3 && (
          <PlanetImage className="planet-surface" image={marsSurface} />
        ))}
      <div className="planet-des--btn-container">
        <div className="planet-des-wiki-container">
          {(count === 1 && (
            <PlanetDes
              title="Mars"
              des="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet."
            />
          )) ||
            (count === 2 && (
              <PlanetDes
                title="Mars"
                des="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
              />
            )) ||
            (count === 3 && (
              <PlanetDes
                title="Mars"
                des="Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
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
        <PlanetCards title="Rotation Time" des="1.03 Days" />
        <PlanetCards title="Revolution Time" des="1.88 Years" />
        <PlanetCards title="Radius" des="3,389.5 Km" />
        <PlanetCards title="Average Temp." des="-28 C" />
      </div>
    </div>
  );
};

export default Mars;
