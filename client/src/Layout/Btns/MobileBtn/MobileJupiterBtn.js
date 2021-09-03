import { useContext } from "react";
import { PlanetContext } from "../../../Context/AppContext";

function MobileJupiterBtn(props) {
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
          className={`planet-btn-j${Overview ? "Show" : ""}`}
          onClick={() => handleBtnToggleOverview(!handleBtnToggleOverview)}
        >
          Overview
        </button>
        <button
          className={`planet-btn-j${Structure ? "" : "Show"}`}
          onClick={() => handleBtnToggleStructure(!handleBtnToggleStructure)}
        >
          Structure
        </button>
        <button
          className={`planet-btn-j${Surface ? "Show" : ""}`}
          onClick={() => handleBtnToggleSurface(!handleBtnToggleSurface)}
        >
          Surface
        </button>
      </div>
    </div>
  );
}

export default MobileJupiterBtn;
