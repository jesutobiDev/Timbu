import React, { useContext } from 'react';
import Hero from "../../assets/images/hero.svg";
import Cart from "../../assets/icons/white-cart.svg";
import bars from "../../assets/icons/bars.svg";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const Header = ({ handleToggleNav, toggleNav }) => {
  const { cart } = useContext(CartContext);
  const numberOfCartItems = cart.length;

  return (
    <div className={`h-[500px] lg:h-[780px] relative ${toggleNav ? "text-[#121211]" : "text-[#F3F2E8] "}`}>
      <div className='absolute w-[650px] h-[500px] md:w-full md:h-full'>
        <img src={Hero} alt="hero-image" className='w-full h-full' />
      </div>
      <div className='bg-black/30 absolute z-10 w-full h-full flex flex-col justify-between'>
        <div className="w-full h-auto  relative md:p-0 md:flex md:gap-10 md:px-[50px] md:py-5 font-poppins">
          <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
            <p className="text-[42px] font-semibold text-[#F3F2E8] ml-5">Timbu</p>
            <div className='flex gap-[20px] items-center'>
              <Link to="/cart" className="relative md:hidden">
                <img src={Cart} alt="cart" className={`${toggleNav ? "invert filter" : ""}`} />
                {numberOfCartItems > 0 && (
                  <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-[#872009] rounded-full w-4 h-4 flex items-center justify-center text-[#F3F2E8] text-xs">
                    {numberOfCartItems}
                  </div>
                )}
              </Link>
              <img src={bars} alt="bars" className='h-[16px] w-[24px] opacity-50  md:hidden mr-5' onClick={handleToggleNav} />
            </div>
          </div>
          <div className={`fixed top-0 right-0 bg-[#F3F2E8] md:bg-transparent md:items-center w-full h-full md:static md:w-auto md:flex md:justify-between md:flex-1 transition-transform duration-500 ease-in-out z-10 ${toggleNav ? 'transform translate-x-0' : 'transform translate-x-full md:transform-none'}`}>
            <div className="flex justify-end p-5 md:hidden">
              <img src={close} alt="close" className='h-[36px] w-[36px] cursor-pointer invert filter' onClick={handleToggleNav} />
            </div>
            <ul className='flex flex-col md:flex-row gap-10 md:gap-5 items-center md:items-center p-10 md:p-0'>
              <li className='transition-all duration-300 ease font-semibold md:font-normal text-[30px] md:text-base'>Collections</li>
              <li className='transition-all duration-300 ease font-semibold md:font-normal text-[30px] md:text-base'>Clearances</li>
              <li className='transition-all duration-300 ease font-semibold md:font-normal text-[30px] md:text-base'>About</li>
            </ul>
            <hr className='opacity-40 md:hidden' />
            <div className="gap-[30px] items-center hidden md:flex p-10 md:p-0">
              <Link to="/cart" className="relative">
                <img src={Cart} alt="cart" className={`${toggleNav ? "invert filter" : ""}`} />
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
        <p className='text-[55px] md:text-[65px] font-poppins lg:w-[50%] m-5 md:m-0 md:mx-[50px] md:my-5 font-semibold md:leading-[90px] tracking-wider'>Crafting Your Perfect Haven</p>
      </div>
    </div>
  );
};

export default Header;
