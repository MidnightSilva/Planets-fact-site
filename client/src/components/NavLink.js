import React from 'react'
import arrow from'../assets/Linkarrow.svg'
import mercury from '../assets/me.svg'


export const NavLink = (props) => {
    return (
      <div className="link-container">
        <div className="right-container">
          <img className="nav-planets-icon" src={mercury} alt="mercury" />
          <p className="nav-planets">Mercury{props.title}</p>
        </div>
        <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
      </div>
    );
}

export default NavLink