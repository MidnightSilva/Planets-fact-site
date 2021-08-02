
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";
const Button = (
  props
) => {
  const {
    togglePlanetDescription,
  } = useContext(PlanetContext);

  return <button onClick={togglePlanetDescription}>{props.name}</button>;
};

export default Button;