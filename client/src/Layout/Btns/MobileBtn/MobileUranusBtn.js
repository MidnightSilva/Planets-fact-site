import { useContext } from "react";
import { PlanetContext } from "../../../Context/AppContext";

function MobileUranusBtn(props) {
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
          className={`planet-btn-u${Overview ? "Show" : ""}`}
          onClick={() => handleBtnToggleOverview(!handleBtnToggleOverview)}
        >
          Overview
        </button>
        <button
          className={`planet-btn-u${Structure ? "" : "Show"}`}
          onClick={() => handleBtnToggleStructure(!handleBtnToggleStructure)}
        >
          Structure
        </button>
        <button
          className={`planet-btn-u${Surface ? "Show" : ""}`}
          onClick={() => handleBtnToggleSurface(!handleBtnToggleSurface)}
        >
          Surface
        </button>
      </div>
    </div>
  );
}

export default MobileUranusBtn;
