import React from 'react'
import Cart from "../../assets/icons/black-cart.svg"
import { TfiMenu } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import about from "../../assets/images/about.png"

const Header = ({ handleToggleNav, toggleNav

}) => {
    return (
        <div className=''>
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
                        <div>
                            <img src={Cart} alt="cart" />
                        </div>
                        <div className="text-[14px] font-semibold">EN</div>
                        {/* <button className="bg-[#F3F2E8] text-black px-4 py-2 rounded-full font-semibold text-[14px]">Contact Us</button> */}
                        <Link to="/listings" className="bg-[#121211] text-[#F3F2E8] px-4 py-2 rounded-full font-semibold text-[14px]">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative m-5 md:m-0 md:mx-[50px] md:my-5 rounded-[25px] overflow-hidden h-[360px] p-12 flex items-end'>
                <img src={about} alt="about-bg" className='w-full h-[650px] absolute top-[-170px] left-0 inset-0' />
                <div className='absolute z-50 h-auto text-[#F3F2E8]'>
                    <p className='font-semibold text-[45px] tracking-wider'>All Timbu Chairs</p>
                </div>
            </div>
        </div>
    )
}

export default Header