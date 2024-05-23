import React from 'react'
import useStore from '../../context/Store'

const Navbar = () => {
    let  bear = useStore(state => state.bears)
  return (
    <div>
      <h2>Navbar {bear}</h2>
    </div>
  )
}

export default Navbar
