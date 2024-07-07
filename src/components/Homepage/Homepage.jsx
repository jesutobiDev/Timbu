import React from 'react'
import Header from './Header'
import Discover from "./Discover"
import About from './About'
import Footer from '../Footer'

const Homepage = ({handleToggleNav, toggleNav}) => {
  return (
    <div className='w-full h-auto min-h-screen font-poppins bg-[#F3F2E8] overflow-x-hidden'>
      <Header handleToggleNav={handleToggleNav} toggleNav={toggleNav}/>
      <Discover/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Homepage