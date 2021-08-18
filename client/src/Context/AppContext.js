
import { useState, createContext } from "react";

export const PlanetContext = createContext();

const AppContextProvider = (props) => {
  

// state for nav
const [hamburgermenu, setHamburgerMenu] = useState(false);
const [ count, setCount]  =useState(1)

const handleBtnToggleOverview = (
) => {
let count = 1;
  setCount(count === 3 ? count - 2 : 1);
  setCount(count === 2 ? count - 1 : 1);
  setCount(count === 1 ? count + 0 : 1);
  console.log(count);
   Overview ? setOverview(true) : setOverview(true);
   console.log(Overview)
    Overview ? setOverview(true) : setOverview(true);
    Structure ? setStructure(true) : setStructure(true);
    Surface ? setSurface(false) : setSurface(false);
};


const handleBtnToggleStructure = (toggleStructureDescription) => {
  let count = 2;
  setCount(count === 3 ? count - 1 : 2);
  setCount(count === 2 ? count + 0 : 2);
  setCount(count === 1 ? count + 1 : 2);
  console.log(count);
  console.log(Structure);
   Overview ? setOverview(false) : setOverview(false);
   Structure ? setStructure(false) : setStructure(false);
   Surface ? setSurface(false) : setSurface(false);
  
};

const handleBtnToggleSurface = () => {
   let count = 3;
  setCount(count === 3 ? count + 0 : 3);
  setCount(count === 2 ? count + 1 : 3);
  setCount(count === 1 ? count + 2 : 3);
  console.log(count);
       Overview ? setOverview(false) : setOverview(false);
       Structure ? setStructure(true) : setStructure(true);
       Surface ? setSurface(true) : setSurface(true);
 console.log(Surface)

};

//state for planet info buttons
    const [Overview, setOverview] = useState(true);
    const [Structure, setStructure] = useState(true);
    const [Surface, setSurface] = useState(false);

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
  count,
  setCount,
  handleBtnToggleSurface,
  handleBtnToggleStructure,
  handleBtnToggleOverview,
  hamburgermenu,
  toggleHamburgerMenu,
  togglePlanetDescription,
  toggleStructureDescription,
  toggleSurfaceDescription,
  Overview,
  setHamburgerMenu,
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