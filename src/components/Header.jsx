import React from 'react'
import Hero from "../assets/images/hero.svg"
import NavBar from './NavBar'

const Header = ({ handleToggleNav, toggleNav }) => {
  return (
    <div className='h-[780px] relative'>
        <img src={Hero} alt="hero-image" className='w-full h-full absolute inset-0' />
        <div className='bg-black opacity-50 absolute z-10 w-full h-full flex flex-col justify-between'>
            <NavBar handleToggleNav={handleToggleNav} toggleNav={toggleNav}  />
            <p className='text-[#F3F2E8] text-[72px] '>Crafting Your Perfect Haven</p>
        </div>
    </div>
  )
}

export default Header