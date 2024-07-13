
import Checkout from "../../assets/images/Checkout.png";
import Navbar from '../General/Navbar';

const Header = ({ handleToggleNav, toggleNav }) => {

    return (
        <div className=''>
            <Navbar handleToggleNav={handleToggleNav} toggleNav={toggleNav} />
            <div className='relative rounded-[25px] overflow-hidden h-[256px] md:h-[360px] p-12 flex items-end  m-5 md:m-0 md:mx-[50px] md:my-5'>
                <div className="w-full h-[650px] absolute top-[-170px] left-0">
                    <img src={Checkout} alt="checkout-bg" className='w-full h-full' />
                </div>
                <div className='absolute z-20 h-auto text-[#F3F2E8]'>
                    <p className='text-[#F3F2E8] font-semibold text-[42px]'>Checkout</p>
                </div>
                <div className="absolute bg-[#121211]/30 z-10 w-full left-0 top-0 h-full"></div>
            </div>
        </div>
    );
};

export default Header;

