import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

function Buttons(props) {
  const {
    handleBtnToggleSurface,
    handleBtnToggleStructure,
    handleBtnToggleOverview,
    Overview,
    Structure,
    Surface,
  } = useContext(PlanetContext);
  return (
    <div className="btn-container-above-tablet">
      <div className="btn-tablet-container">
        <span>01</span>
        <button
          className={`planet-btn-above-tablet ${Overview ? "Show" : ""}`}
          onClick={() => handleBtnToggleOverview(!handleBtnToggleOverview)}
        >
          Overview
        </button>
      </div>
      <div className={props.className}>
        <span>02</span>

        <button
          className={`planet-btn-above-tablet ${Structure  ? "" : "Show"}`}
          onClick={() => handleBtnToggleStructure(!handleBtnToggleStructure)}
        >
          Structure
        </button>
      </div>
      <div className="btn-tablet-container">
        <span>03</span>

        <button
          className={`planet-btn-above-tablet ${Surface ? "Show" : ""}`}
          onClick={() => handleBtnToggleSurface(!handleBtnToggleSurface)}
        >
          Surface
        </button>
      </div>
    </div>
  );
}

export default Buttons;
