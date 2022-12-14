import React from 'react'

function Person({name,height,mass}) {
  return (
    <div className='person'>
      <h1>{name}</h1>
      <h2>height: {height}cm</h2>
      <h3>mass: {mass}kg</h3>
    </div>
  )
}

export default Person