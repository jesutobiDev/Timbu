import React from 'react'
import Header from './Header'
import Products from './Products'
import Footer from '../General/Footer'
import DefaultImage from "../../assets/images/about.png"

const ProductListings = ({ handleToggleNav, toggleNav }) => {
    return (
        <div className='w-full'>
            <Header handleToggleNav={handleToggleNav} toggleNav={toggleNav} />
            <Products/>
            <Footer />
        </div>
    )
}

export default ProductListings