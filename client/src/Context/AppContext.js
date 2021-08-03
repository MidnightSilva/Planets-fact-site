
import { useState, createContext } from "react";

export const PlanetContext = createContext();

const AppContextProvider = (props) => {
  

// state for nav
const [hamburgermenu, setHamburgerMenu] = useState(false);

//state for planet info buttons
    const [Overview, setOverview] = useState(true);
    const [Structure, setStructure] = useState(true);
    const [Surface, setSurface] = useState(true);

const toggleHamburgerMenu = () => {
  hamburgermenu ? setHamburgerMenu(false) : setHamburgerMenu(true);


};


    const togglePlanetDescription = () => {
      Overview ? setOverview(true) : setOverview(true);
      Structure ? setStructure(true) : setStructure(true);
      Surface ? setSurface(false) : setSurface(false);
    };

    const toggleStructureDescription = () => {
      Overview ? setOverview(false) : setOverview(false);
      Structure ? setStructure(false) : setStructure(false);
      Surface ? setSurface(false) : setSurface(false);
    };

    const toggleSurfaceDescription = () => {
      Overview ? setOverview(false) : setOverview(false);
      Structure ? setStructure(true) : setStructure(true);
      Surface ? setSurface(true) : setSurface(true);
    };
const value = {
  hamburgermenu,
  toggleHamburgerMenu,
  togglePlanetDescription,
  toggleStructureDescription,
  toggleSurfaceDescription,
  Overview,
  
  Structure,
  
  Surface,
  
};

  return (
    <PlanetContext.Provider value={value}>
        {props.children}
    </PlanetContext.Provider>
  );
};

export default  AppContextProvider ;