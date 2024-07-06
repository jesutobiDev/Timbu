import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Homepage = ({handleToggleNav, toggleNav}) => {
  return (
    <div className='bg-red-400 w-full h-auto min-h-screen'>
      <Header handleToggleNav={handleToggleNav} toggleNav={toggleNav}/>
      <Footer/>
    </div>
  )
}

export default Homepage