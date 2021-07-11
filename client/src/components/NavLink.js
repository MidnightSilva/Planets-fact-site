import React from 'react'
import arrow from'../assets/Linkarrow.svg'



export const NavLink = (props) => {
    return (
      <div className="link-container">
        <div className="right-container">
          <img className="nav-planets-icon" src={props.image} alt="planet" />
          <p className="nav-planets">{props.title}</p>
        </div>
        <img className="nav-arrow" src={arrow} alt="left-arrow-icon" />
      </div>
    );
}

export default NavLink