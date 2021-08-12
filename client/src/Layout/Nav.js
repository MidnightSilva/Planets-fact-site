import hamburgerMenuDisabled from '../assets/hamburgerMenuFaded.svg'
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import NavLinksMobile from "../components/NavLinksMobile";
import NavLinks from "../components/NavLinks"; 
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Nav = (props) => {

const { toggleHamburgerMenu, hamburgermenu } =
  useContext(PlanetContext);
    return (
      <nav>
        <div className="nav-top">
          <p className="nav-title">The Planets</p>
          {hamburgermenu ? (
            <img
              src={hamburgerMenuDisabled}
              alt="hamburgermenu-logo"
              className="hamburgerMenu"
              onClick={toggleHamburgerMenu}
            />
          ) : (
            //add the conditional rendering className for the Hamburger menu here
            <img
              src={hamburgerMenu}
              alt="hamburgermenu-logo"
              className={`hamburgerMenu ${hamburgerMenu ? "Show" : ""}`}
              onClick={toggleHamburgerMenu}
            />
          )}
        </div>
        <NavLinksMobile />
        <NavLinks />
      </nav>
    );
}

export default Nav