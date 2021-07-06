import hamburgerMenuDisabled from '../assets/hamburgerMenuFaded.svg'
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import NavLink from '../components/NavLink'

import React, { useState } from "react";
const Nav = (props) => {

// i was thinking of mapping through this array to show however i wasnt sure
//how to do that and react router dom. for now i will do this way. 
// i will come back to refactor my code 


// const planets = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune"
// ];
const [hamburgermenu , setHamburgerMenu] = useState (false)

const toggleHamburgerMenu = () => {
  hamburgermenu ? setHamburgerMenu(false) : setHamburgerMenu(true); 
}

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
        {
          hamburgermenu ?
        <NavLink /> 
        &&
        <NavLink title=""  />
        :
        null
        }
      </nav>
    );
}

export default Nav