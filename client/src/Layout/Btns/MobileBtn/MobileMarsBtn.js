import { useContext } from "react";
import { PlanetContext } from "../../../Context/AppContext";

function MobileMarsBtn(props) {
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
          className={`planet-btn-ma${Overview ? "Show" : ""}`}
          onClick={() => handleBtnToggleOverview(!handleBtnToggleOverview)}
        >
          Overview
        </button>
        <button
          className={`planet-btn-ma${Structure ? "" : "Show"}`}
          onClick={() => handleBtnToggleStructure(!handleBtnToggleStructure)}
        >
          Structure
        </button>
        <button
          className={`planet-btn-ma${Surface ? "Show" : ""}`}
          onClick={() => handleBtnToggleSurface(!handleBtnToggleSurface)}
        >
          Surface
        </button>
      </div>
    </div>
  );
}

export default MobileMarsBtn;
