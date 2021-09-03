import PlanetImage from "../components/PlanetImage";
import PlanetLink from "../components/PlanetLink";
import PlanetDes from "../components/PlanentDes";
import venus from "../assets/planet-venus.svg";
import venusInternal from "../assets/planet-venus-internal.svg";
import venusSurface from "../assets/geology-venus.svg";
import PlanetCards from "../components/PlanetCard";
import MobileVenusBtn from "../Layout/Btns/MobileBtn/MobileVenusBtn";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";
import BtnVenus from "../Layout/Btns/Btns/BtnVenus";

const Venus = () => {
  const { count } = useContext(PlanetContext);

  return (
    <div className="page-container">
      <div className="Layout">
        <MobileVenusBtn />
        {(count === 1 && <PlanetImage className="planet" image={venus} />) ||
          (count === 2 && (
            <PlanetImage className="planet" image={venusInternal} />
          )) ||
          (count === 3 && (
            <PlanetImage className="planet-surface" image={venusSurface} />
          ))}
        <div className="planet-des--btn-container">
          <div className="planet-des-wiki-container">
            {(count === 1 && (
              <PlanetDes
                title="Venus"
                des="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
              />
            )) ||
              (count === 2 && (
                <PlanetDes
                  title="Venus"
                  des="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
                />
              )) ||
              (count === 3 && (
                <PlanetDes
                  title="Venus"
                  des="Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
                />
              ))}
            {(count === 1 && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Venus" />
            )) ||
              (count === 2 && (
                <PlanetLink href="https://en.wikipedia.org/wiki/Venus#Internal_structure" />
              )) ||
              (count === 3 && (
                <PlanetLink href="https://en.wikipedia.org/wiki/Venus#Surface_geology" />
              ))}
          </div>
          <BtnVenus />
        </div>
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
