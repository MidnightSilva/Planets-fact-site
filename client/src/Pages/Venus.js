import PlanetImage from "../components/PlanetImage";
import PlanetLink from "../components/PlanetLink";
import PlanetDes from "../components/PlanentDes";
import venus from "../assets/planet-venus.svg";
import venusInternal from "../assets/planet-venus-internal.svg";
import venusSurface from "../assets/geology-venus.svg";
import PlanetCards from "../components/PlanetCard";
import MobileButtons from "../components/mobileButtons";
import Buttons from "../components/buttons";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Venus = () => {
  const { count } = useContext(PlanetContext);

  return (
    <div className="page-container">
      {" "}
      <MobileButtons />
      {(count === 1 && <PlanetImage className="planet" image={venus} />) ||
        (count === 2 && (
          <PlanetImage className="planet" image={venusInternal} />
        )) ||
        (count === 3 && (
          <PlanetImage className="planet-surface" image={venusSurface} />
        ))}
      <div className="planet-des--btn-container">
        <div className="planet-des-wiki-container">
          {(count === 1  && (
            <PlanetDes
              title="Venus"
              des="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
            />
          )) ||
            (count === 2 && (
              <PlanetDes
                title="Venus"
                des="The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate. similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
              />
            )) ||
            (count === 3  && (
              <PlanetDes
                title="Venus"
                des="Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
              />
            ))}
          {(count === 1 && (
            <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)" />
          )) ||
            (count === 2  && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure" />
            )) ||
            (count === 3 && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology" />
            ))}
        </div>
        <Buttons />
      </div>
      <div className="planet-cards-container">
        <PlanetCards title="Rotation Time" des="243 Days" />
        <PlanetCards title="Revolution Time" des="224.7 Days" />
        <PlanetCards title="Radius" des="6,051.8 Km" />
        <PlanetCards title="Average Temp." des="471 c" />
      </div>
    </div>
  );
};

export default Venus;
