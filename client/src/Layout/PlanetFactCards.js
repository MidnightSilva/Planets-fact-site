import React from 'react'
import Card from '../components/Card'
const PlanetCard = () => {
    return (
      <div>
        <Card title="rotation" des="58.6 Days" />
        <Card title="revolution" des="87.97 Days" />
        <Card title="radius" des="2,439.7 KM" />
        <Card title="temperature" des="430°c" />
      </div>
    );
}

export default PlanetCard