import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

function MobileButtons(props) {
  const {
    handleBtnToggleSurface,
    handleBtnToggleStructure,
    handleBtnToggleOverview,
    Overview,
    Structure,
    Surface,
  } = useContext(PlanetContext);

  return (
    <div>
      <div className="btn-container">
        <button
          className={`planet-btn${Overview ? "Show" : ""}`}
          onClick={() => handleBtnToggleOverview(!handleBtnToggleOverview)}
        >
          Overview
        </button>
        <button
          className={`planet-btn${Structure ? "" : "Show"}`}
          onClick={() => handleBtnToggleStructure(!handleBtnToggleStructure)}
        >
          Structure
        </button>
        <button
          className={`planet-btn${Surface ? "Show" : ""}`}
          onClick={() => handleBtnToggleSurface(!handleBtnToggleSurface)}
        >
          Surface
        </button>
      </div>
    </div>
  );
}

export default MobileButtons;
