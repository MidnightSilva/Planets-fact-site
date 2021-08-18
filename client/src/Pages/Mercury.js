import PlanetImage from "../components/PlanetImage"; 
import PlanetDes from "../components/PlanentDes";
import PlanetLink from "../components/PlanetLink";
import mercury from "../assets/planet-mercury.svg";
import mercuryInternal from "../assets/planet-mercury-internal.svg";
import mercurySurface from "../assets/geology-mercury.svg";
import PlanetCards from "../components/PlanetCard"
import MobileButtons from "../components/mobileButtons";
import Buttons from "../components/buttons";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Mercury = ( props ) => {
  const {
     count
  } = useContext(PlanetContext);

  return (
    <div className="page-container">
      <MobileButtons />
      {(count === 1 && <PlanetImage className="planet" image={mercury} />) ||
        (count === 2 && (
          <PlanetImage className="planet" image={mercuryInternal} />
        )) ||
        (count === 3 && (
          <PlanetImage className="planet-surface" image={mercurySurface} />
        ))}
      <div className="planet-des--btn-container">
        <div className="planet-des-wiki-container">
          {(count === 1 && (
            <PlanetDes
              title="Mercury"
              des="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth"
            />
          )) ||
            (count === 2 && (
              <PlanetDes
                title="Mercury"
                des="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
              />
            )) ||
            (count === 3 && (
              <PlanetDes
                title="Mercury"
                des="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
              />
            ))}
          {(count === 1  && (
            <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)" />
          )) ||
            (count === 2 && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure" />
            )) ||
            (count === 3 && (
              <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology" />
            ))}
        </div>
        <Buttons className="btn-tablet-container-m" />
      </div>
      <div className="planet-cards-container">
        <PlanetCards title="Rotation Time" des="58.6 Days" />
        <PlanetCards title="Revolution Time" des="87.97 Days" />
        <PlanetCards title="Radius" des="2,439.7 Km" />
        <PlanetCards title="Average Temp." des="430 C" />
      </div>
    </div>
  );
};

export default Mercury;
