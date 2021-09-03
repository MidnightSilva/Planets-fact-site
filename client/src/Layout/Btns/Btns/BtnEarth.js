import { useContext } from "react";
import { PlanetContext } from "../../../Context/AppContext";

function BtnEarth(props) {
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
      <div
        className={`btn-tablet-container-e ${Overview ? "Show" : ""}`}
        onClick={() => handleBtnToggleOverview(!handleBtnToggleOverview)}
      >
        <span>01</span>
        <button className="planet-btn-above-tablet">Overview</button>
      </div>

      <div
        className={`btn-tablet-container-e  ${Structure ? "" : "Show"}`}
        onClick={() => handleBtnToggleStructure(!handleBtnToggleStructure)}
      >
        <span>02</span>
        <button className="planet-btn-above-tablet">Structure</button>
      </div>

      <div
        className={`btn-tablet-container-e  ${Surface ? "Show" : ""}`}
        onClick={() => handleBtnToggleSurface(!handleBtnToggleSurface)}
      >
        <span>03</span>

        <button className="planet-btn-above-tablet">Surface</button>
      </div>
    </div>
  );
}

export default BtnEarth;
