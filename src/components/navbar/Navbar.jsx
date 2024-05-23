import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { SlHeart } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='container'>
      <div className="nav-links">
        <h2>AliExpress</h2>
        <IoBookOutline className='nav'/>
        <input type="text" placeholder='Search...'/>
        <SlHeart className='nav'/>
        <IoCartOutline className='nav'/>
        <div className="nav">
        <RxExit />
        </div>
      </div>
    </div>
  )
}

export default Navbar
