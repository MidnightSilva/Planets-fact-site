import { useContext } from "react";
import { PlanetContext } from "../../../Context/AppContext";

function MobileEarthBtn(props) {
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
          className={`planet-btn-e${Overview ? "Show" : ""}`}
          onClick={() => handleBtnToggleOverview(!handleBtnToggleOverview)}
        >
          Overview
        </button>
        <button
          className={`planet-btn-e${Structure ? "" : "Show"}`}
          onClick={() => handleBtnToggleStructure(!handleBtnToggleStructure)}
        >
          Structure
        </button>
        <button
          className={`planet-btn-e${Surface ? "Show" : ""}`}
          onClick={() => handleBtnToggleSurface(!handleBtnToggleSurface)}
        >
          Surface
        </button>
      </div>
    </div>
  );
}

export default MobileEarthBtn;
