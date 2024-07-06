import Cart from "../assets/icons/cart.svg"
import { TfiMenu } from 'react-icons/tfi';
// import { Link } from "react-router-dom";

const NavBar = ({handleToggleNav, toggleNav}) => {
  return (
    <div className="w-full h-auto relative p-5 md:p-0 md:flex md:gap-10 md:px-[50px] md:py-5 font-poppins">
        <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
            <p className="text-[#F3F2E8] text-[45px] font-semibold">Timbu</p>
            <TfiMenu  className='h-[40px] w-[40px] opacity-50  md:hidden'  onClick={handleToggleNav} />
        </div>
        <div className={`bg-darkViolet md:bg-transparent md:items-center  absolute md:static top-[100px] overflow-hidden md:overflow-auto w-[90%] md:w-auto md:flex-1 md:h-auto transition-all duration-500 ease rounded-2xl md:rounded-none text-white md:text-gray  cursor-pointer font-light text-2xl md:text-lg flex flex-col md:flex-row  md:justify-between gap-10 md:gap-0 z-10 ${toggleNav ? 'h-[470px] p-10' : 'h-0'}`}>
            <ul className='flex flex-col md:flex-row gap-10 items-center'>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Collections</li>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Clearances</li>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>About</li>
            </ul>
            <hr className='opacity-40'/>
            <div className="flex gap-[30px] items-center">
                <div>
                    <img src={Cart} alt="cart" />
                </div>
                <div className="text-[14px] font-semibold">EN</div>
                <button className="bg-[#F3F2E8] text-black px-4 py-2 rounded-full font-semibold text-[14px]">Contact Us</button>
                {/* <Link to=""></Link> */}
            </div>
            {/* <ul className='flex flex-col md:flex-row gap-10 items-center'>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Login</li>
                <li className='bg-cyan w-full md:w-fit md:px-7 text-white text-center rounded-full py-3 md:py-1 hover:opacity-50 cursor-pointer transition-all duration-300 ease'>Sign Up</li>
            </ul> */}
        </div>
    </div>
  )
}

export default NavBar

// FIXME - Change hover from the current method