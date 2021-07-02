import React from 'react'
import data from '../data.json'

const Nav = (props) => {



    return (
        <div>
            <h2>The Planets</h2>
           {
data.map((data) =>
<div>{data.name}</div> ) 
 }
            
        </div>
    )
}

export default Nav