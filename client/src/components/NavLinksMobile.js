import mercury from "../assets/me.svg";
import venus from "../assets/v.svg";
import earth from "../assets/e.svg";
import mars from "../assets/ma.svg";
import jupiter from "../assets/j.svg";
import saturn from "../assets/s.svg";
import uranus from "../assets/u.svg";
import neptune from "../assets/n.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/Linkarrow.svg";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const NavLinksMobile = (props) => {
  const { toggleHamburgerMenu, hamburgermenu } = useContext(PlanetContext);

  return (
    //add the conditional rendering className for the Hamburger menu here
    <div className={`nav-links-container-mobile ${hamburgermenu ? "show" : ""}`}>
      <Link to="/">
        <div className="link-container">
          <div className="right-container">
            <img
              className="nav-planet"
              src={mercury}
              alt="planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              Mercury
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>
      </Link>
      <Link to="/venus">
        <div className="link-container">
          <div className="right-container">
            <img
              src={venus}
              className="nav-planet"
              alt="planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              Venus
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>{" "}
      </Link>{" "}
      <Link to="earth">
        <div className="link-container">
          <div className="right-container">
            <img
              src={earth}
              className="nav-planet"
              alt="planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              Earth
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>
      </Link>
      <Link to="/mars">
        <div className="link-container">
          <div className="right-container">
            <img
              src={mars}
              alt="planet"
              className="nav-planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              Mars
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>
      </Link>{" "}
      <Link to="/jupiter">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <img
              src={jupiter}
              className="nav-planet"
              alt="planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              jupiter
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>
      </Link>{" "}
      <Link to="/saturn">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <img
              src={saturn}
              alt="planet"
              className="nav-planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              Saturn
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>
      </Link>{" "}
      <Link to="/uranus">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <img
              src={uranus}
              alt="planet"
              className="nav-planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              Uranus
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>
      </Link>
      <Link to="/neptune">
        {" "}
        <div className="link-container">
          <div className="right-container">
            <img
              src={neptune}
              alt="planet"
              className="nav-planet"
              onClick={toggleHamburgerMenu}
            />
            <p onClick={toggleHamburgerMenu} className="nav-planets">
              Neptune
            </p>
          </div>
          <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
        </div>
      </Link>
    </div>
  );
};

export default NavLinksMobile;
