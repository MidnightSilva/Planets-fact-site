import hamburgerMenuDisabled from '../assets/hamburgerMenuFaded.svg'
import hamburgerMenu from "../assets/hamburgerMenu.svg";

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
const [hamburgermenu , setHamburgerMenu] = useState (true)

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
          <div className="nav-items">
          <p className="items">Mercury</p>
          <p className="items">Venus</p>
          <p className="items">Earth</p>
          <p className="items">Mars</p>
          <p className="items">Jupiter</p>
          <p className="items">Saturn</p>
          <p className="items">Uranus</p>
          <p className="items">Neptune</p>
        </div> :
        null
        }
      </nav>
    );
}

export default Nav