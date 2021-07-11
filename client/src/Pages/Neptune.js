import React from 'react'
import PlanetInfoButtons from "../Layout/PlanetInfoButtons";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import neptune from "../assets/planet-neptune.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
const Neptune = () => {
    return (
      <div className="page-container">
        <PlanetInfoButtons />
        <PlanetImage image={neptune} />
        <PlanetDes
          title="Neptune"
          des="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth"
        />
        <PlanetFactCards />
      </div>
    );
}

export default Neptune