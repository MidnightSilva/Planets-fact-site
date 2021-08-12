
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const NavLinks = (props) => {


  const { hamburgermenu } = useContext(PlanetContext);

  return (
    //add the conditional rendering className for the Hamburger menu here
    <div className={`nav-links-container ${hamburgermenu ? "show" : ""}`}>
      <Link to="/">
        <div className="link-container">
          <div className="right-container">
            <p className="nav-planets">Mercury</p>
          </div>
        </div>
      </Link>
      <Link to="/venus">
        <div className="link-container">
            <div className="right-container">
           <p className="nav-planets">Venus</p>
          </div>
        </div>{" "}
      </Link>{" "}
      <Link to="earth">
        <div className="link-container">
          <div className="right-container">
            
            <p className="nav-planets">Earth</p>
          </div>
         
        </div>
      </Link>
      <Link to="/mars">
        <div className="link-container">
          <div className="right-container">
            <p  className="nav-planets">
              Mars
            </p>
          </div>
        </div>
      </Link>{" "}
      <Link to="/jupiter">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <p className="nav-planets">jupiter</p>
          </div>
        </div>
      </Link>{" "}
      <Link to="/saturn">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <p  className="nav-planets">
              Saturn
            </p>
          </div>
        </div>
      </Link>{" "}
      <Link to="/uranus">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <p className="nav-planets">Uranus</p>
          </div>
        </div>
      </Link>
      <Link to="/neptune">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <p className="nav-planets">Neptune</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavLinks;
