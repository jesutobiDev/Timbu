import React from 'react'
import Header from './Header'
import Products from './Products'
import Footer from '../Footer'

const ProductListings = ({ handleToggleNav, toggleNav }) => {
    return (
        <div>
            <Header/>
            <Products/>
            <Footer />
        </div>
    )
}

export default ProductListings