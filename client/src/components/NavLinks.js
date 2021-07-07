import React from 'react'
import NavLink from './NavLink'
import mercury from "../assets/me.svg";
import venus from "../assets/v.svg";
import earth from "../assets/e.svg";
import mars from "../assets/ma.svg";
import jupiter from "../assets/j.svg";
import saturn from "../assets/s.svg";
import uranus from "../assets/u.svg";
import neptune from "../assets/n.svg";
const NavLinks = () => {
    return (
      <div>
        <NavLink image={mercury} title="mercury" /> 
        <NavLink image={venus} title="venus" />
        <NavLink image={earth} title="earth" /> 
        <NavLink image={mars} title=" mars" />
        <NavLink image={jupiter} title="jupiter" /> 
        <NavLink image={saturn} title="saturn" />
        <NavLink image={uranus} title="uranus" /> 
        <NavLink image={neptune} title="neptune" />
      </div>
    );
}

export default NavLinks