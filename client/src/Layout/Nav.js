import hamburgerMenuDisabled from '../assets/hamburgerMenuFaded.svg'
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import NavLinks from "../components/NavLinks";
import { useState } from "react";
// import { useContext } from "react";
// import  AppContext from "../App";
const Nav = (props) => {
// const [ hamburgermenu, toggleHamburgerMenu ]= useContext(AppContext);
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
        {hamburgermenu
          ? <NavLinks/> 
          : null}
      </nav>
    );
}

export default Nav