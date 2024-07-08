import React, { useContext } from 'react';
import Hero from "../../assets/images/hero.svg"
import Cart from "../../assets/icons/white-cart.svg"
import { TfiMenu } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const Header = ({ handleToggleNav, toggleNav }) => {
  const { cart } = useContext(CartContext);
  const numberOfCartItems = cart.length;
  return (
    <div className='h-[780px] relative text-[#F3F2E8]'>
      <img src={Hero} alt="hero-image" className='w-full h-full absolute inset-0' />
      <div className='bg-black/30 absolute z-10 w-full h-full flex flex-col justify-between'>
        <div className="w-full h-auto relative p-5 md:p-0 md:flex md:gap-10 md:px-[50px] md:py-5 font-poppins">
          <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
            <p className="text-[42px] font-semibold">Timbu</p>
            <TfiMenu className='h-[40px] w-[40px] opacity-50  md:hidden' onClick={handleToggleNav} />
          </div>
          <div className={`bg-darkViolet md:bg-transparent md:items-center  absolute md:static top-[100px] overflow-hidden md:overflow-auto w-[90%] md:w-auto md:flex-1 md:h-auto transition-all duration-500 ease rounded-2xl md:rounded-none md:text-gray  cursor-pointer font-light text-2xl md:text-lg flex flex-col md:flex-row  md:justify-between gap-10 md:gap-0 z-10 ${toggleNav ? 'h-[470px] p-10' : 'h-0'}`}>
            <ul className='flex flex-col md:flex-row gap-10 items-center'>
              <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Collections</li>
              <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Clearances</li>
              <li className='md:hover:text-darkViolet transition-all duration-300 ease'>About</li>
            </ul>
            <hr className='opacity-40' />
            <div className="flex gap-[30px] items-center">
            <Link to="/cart" className="relative">
                        <img src={Cart} alt="cart" />
                        {numberOfCartItems > 0 && (
                            <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-[#872009] rounded-full w-4 h-4 flex items-center justify-center text-[#F3F2E8] text-xs">
                                {numberOfCartItems}
                            </div>
                        )}
                    </Link>
              <div className="text-[14px] font-semibold">EN</div>
              <Link to="/" className="bg-[#F3F2E8] text-[#121211] px-4 py-2 rounded-full font-semibold text-[14px]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <p className=' text-[65px] font-poppins w-[50%] m-5 md:m-0 md:mx-[50px] md:my-5 font-semibold leading-[90px] tracking-wider'>Crafting Your Perfect Haven</p>
      </div>
    </div>
  )
}

export default Header