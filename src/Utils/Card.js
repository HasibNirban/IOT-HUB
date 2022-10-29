import React from 'react'
import '../Components/Stat.css'
const Card = ({data}) => {
  
  return (
    <div className='card'>
      <h3>{data}</h3>
      <p>full-fledged Devices</p>
    </div>
  )
}

export default Card
