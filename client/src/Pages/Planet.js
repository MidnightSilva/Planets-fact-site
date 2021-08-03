// import React, {useEffect, useState} from 'react'
// import data from '../data.json'

// const Planet = ({match}) => {
//     const [planet, setPlanet] = useState(null)
//     useEffect(() => {
//         const planetData = data.find(planet => planet.name.toLowerCase() === match.params.planet)
//         setPlanet(planetData)
//     }, [])
//     console.log(match)
//     console.log(planet)
//     return (
//         <div>
//             <h1>{planet?.name}</h1>
            
//         </div>
//     )
// }

// export default Planet