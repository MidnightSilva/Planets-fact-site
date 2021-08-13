import PlanetLink from "../components/PlanetLink";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/PlanentDes";
import uranus from "../assets/planet-uranus.svg";
import uranusInternal from "../assets/planet-uranus-internal.svg";
import uranusSurface from "../assets/geology-uranus.svg";
import PlanetCards from "../components/PlanetCard";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Uranus = () => {
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
          className={`planet-btn${Overview ? "Show" : ""}`}
          onClick={() => togglePlanetDescription(!togglePlanetDescription)}
        >
          Overview
        </button>
        <button
          className={`planet-btn${Structure ? "" : "Show"}`}
          onClick={() =>
            toggleStructureDescription(!toggleStructureDescription)
          }
        >
          Structure
        </button>
        <button
          className={`planet-btn${Surface ? "Show" : ""}`}
          onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
        >
          Surface
        </button>
      </div>
      {(Overview === true && (
        <PlanetImage className="planet" image={uranus} />
      )) ||
        (Structure === false && (
          <PlanetImage className="planet" image={uranusInternal} />
        )) ||
        (Surface === true && (
          <PlanetImage className="planet-surface" image={uranusSurface} />
        ))}
      <div className="planet-des--btn-container">
        <div className="planet-des-wiki-container">
          {(Overview === true && (
            <PlanetDes
              title="Uranus"
              des="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
            />
          )) ||
            (Structure === false && (
              <PlanetDes
                title="Uranus"
                des="The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
              />
            )) ||
            (Surface === true && (
              <PlanetDes
                title="Uranus"
                des="The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
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
        <div className="btn-container-above-tablet">
          <button
            className={`planet-btn-above-tablet ${Overview ? "Show" : ""}`}
            onClick={() => togglePlanetDescription(!togglePlanetDescription)}
          >
            Overview
          </button>
          <button
            className={`planet-btn-above-tablet ${Structure ? "" : "Show"}`}
            onClick={() =>
              toggleStructureDescription(!toggleStructureDescription)
            }
          >
            Structure
          </button>
          <button
            className={`planet-btn-above-tablet ${Surface ? "Show" : ""}`}
            onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
          >
            Surface
          </button>
        </div>
      </div>
      <div className="planet-cards-container">
        <PlanetCards title="Rotation Time" des="17.2 Hours" />
        <PlanetCards title="Revolution Time" des="84 Years" />
        <PlanetCards title="Radius" des="25,362 Km" />
        <PlanetCards title="Average Temp." des="-195 C" />
      </div>
    </div>
  );
};

export default Uranus;
