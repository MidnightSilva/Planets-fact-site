import hamburgerMenuDisabled from '../assets/hamburgerMenuFaded.svg'
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import NavLinks from "../components/NavLinks";
// import { useState } from "react";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Nav = (props) => {

const { toggleHamburgerMenu, hamburgermenu } = useContext(PlanetContext);

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
            <img
              src={hamburgerMenu}
              alt="hamburgermenu-logo"
              className="hamburgerMenu"
              onClick={toggleHamburgerMenu}
            />
          )}
        </div>
        {hamburgermenu ? <NavLinks  /> : null}
      </nav>
    );
}

export default Nav