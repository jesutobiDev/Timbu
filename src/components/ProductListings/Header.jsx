
import about from "../../assets/images/about.png";
import Navbar from '../General/Navbar';

const Header = ({ handleToggleNav, toggleNav }) => {

    return (
        <div className=''>
            <Navbar handleToggleNav={handleToggleNav} toggleNav={toggleNav} />
            <div className='relative rounded-[25px] overflow-hidden h-[256px] md:h-[360px] p-12 flex items-end  m-5 md:m-0 md:mx-[50px] md:my-5'>
                <img src={about} alt="about-bg" className='w-full h-[650px] absolute top-[-170px] left-0' />
                <div className='absolute z-10 h-auto text-[#F3F2E8]'>
                    <p className='font-semibold text-[45px] tracking-wider'>All Timbu Chairs</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
