import hamburgerMenuDisabled from '../assets/hamburgerMenuFaded.svg'
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import NavLinks from "../components/NavLinks";
// import { useState } from "react";
 // eslint-disable-next-line
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Nav = (props) => {

const { toggleHamburgerMenu, hamburgermenu } =
  useContext(PlanetContext);
// const [size, setSize] = useState ([window.innerWidth]);

// useEffect(() =>{
//   console.log("is this looping???");
//   const handleWindowStateChange = () => {
//     setSize(window.innerWidth);
//     if (size <= 768) {
//       setHamburgerMenu(true);
//     }
//   };
//   window.addEventListener("resize", handleWindowStateChange);
//   // eslint-disable-next-line
// },[size, hamburgermenu])
// console.log(size)




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
           className={`hamburgerMenu ${hamburgerMenu ? 'Show' : ''}`}
              onClick={toggleHamburgerMenu}
            />
          )}
        </div>
        <NavLinks />
      </nav>
    );
}

export default Nav