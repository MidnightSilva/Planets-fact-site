import React from 'react'

const PlanetDes = (props) => {
   return (
        <div className="planet-content-container">
            <h2 className="planet-name">{props.title}</h2>
            <p className="planet-info">{props.des}</p>
        </div>
    )
}

export default PlanetDes