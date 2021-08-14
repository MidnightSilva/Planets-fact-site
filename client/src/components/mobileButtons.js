import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

function MobileButtons(props) {
  const {
    togglePlanetDescription,
    toggleStructureDescription,
    toggleSurfaceDescription,
    Overview,
    Structure,
    Surface,
  } = useContext(PlanetContext);

  return (
    <div>
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
          className={`planet-btn${Surface ? "" : "Show"}`}
          onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
        >
          Surface
        </button>
      </div>
    </div>
  );
}

export default MobileButtons;
