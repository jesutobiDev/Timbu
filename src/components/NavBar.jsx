// import Logo from '../images/logo.svg'

const NavBar = ({handleToggleNav, toggleNav}) => {
  return (
    <div className="w-full h-auto relative p-5 md:p-0 md:flex md:gap-10 md:px-[100px] md:py-5 bg-red-500">
        <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
            {/* <img src={Logo} alt="logo" className=' h-[40px] md:h-[27px]' /> */}
            {/* <TfiMenu  className='h-[40px] w-[40px] opacity-50  md:hidden'  onClick={handleToggleNav} /> */}
        </div>
        <div className={`bg-darkViolet md:bg-transparent md:items-center  absolute md:static top-[100px] overflow-hidden md:overflow-auto w-[90%] md:w-auto md:flex-1 md:h-auto transition-all duration-500 ease rounded-2xl md:rounded-none text-white md:text-gray  cursor-pointer font-semibold text-2xl md:text-lg flex flex-col md:flex-row  md:justify-between gap-10 md:gap-0 z-10 ${toggleNav ? 'h-[470px] p-10' : 'h-0'}`}>
            <ul className='flex flex-col md:flex-row gap-10 items-center'>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Features</li>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Pricing</li>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Resources</li>
            </ul>
            <hr className='opacity-40'/>
            <ul className='flex flex-col md:flex-row gap-10 items-center'>
                <li className='md:hover:text-darkViolet transition-all duration-300 ease'>Login</li>
                <li className='bg-cyan w-full md:w-fit md:px-7 text-white text-center rounded-full py-3 md:py-1 hover:opacity-50 cursor-pointer transition-all duration-300 ease'>Sign Up</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar

// FIXME - Change hover from the current method