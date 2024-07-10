import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data';
import Cart from "../../assets/icons/black-cart.svg";
import { TfiMenu } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow-forward.svg";
import Footer from "../Footer"
import bars from "../../assets/icons/bars.svg";
import close from "../../assets/icons/close.svg";
import { CartContext } from '../Context/CartContext';

const Product = ({ handleToggleNav, toggleNav }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [selectedColor, setSelectedColor] = useState(product.colorVariants[0].color);
    const [quantity, setQuantity] = useState(1);
    const [activeSection, setActiveSection] = useState('details');
    const { addToCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);

    if (!product) {
        return <p>Product not found</p>;
    }

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = ({ id, quantity, selectedColor }) => {
        addToCart({ id, quantity, selectedColor });
    };

    const numberOfCartItems = cart.length;

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'details':
                return (
                    <div className='flex gap-[20px] justify-between border-b-[1px] border-[#121211]/20 py-[20px]'>
                        <p>{product.description}</p>
                        <p>{product.availability}</p>
                        <div className='flex gap-[15px] flex-col'>
                            {product.characteristics.map((char, index) => (
                                <div key={index} className='flex items-center gap-[10px]'>
                                    <img src={char.icon} className='w-6 h-6' alt={char.icon_text} />
                                    <p className='text-nowrap'>{char.icon_text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'specs':
                return <div>Specifications</div>;
            case 'reviews':
                return <div>Reviews</div>;
            case 'warranty':
                return <p>Warranty</p>;
            default:
                return null;
        }
    };

    return (
        <div className="">
 <div className="w-full h-auto relative md:p-0 md:flex md:gap-10 md:px-[50px] md:py-5 font-poppins md:items-center">
                <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
                    <p className="text-[42px] font-semibold text-[#121211] ml-5">Timbu</p>
                    <div className='flex gap-[20px] items-center'>
                        <Link to="/cart" className="relative md:hidden">
                            <img src={Cart} alt="cart" className={`${toggleNav ? "invert filter" : ""}`} />
                            {numberOfCartItems > 0 && (
                                <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-[#872009] rounded-full w-4 h-4 flex items-center justify-center text-[#F3F2E8] text-xs">
                                    {numberOfCartItems}
                                </div>
                            )}
                        </Link>
                        <img src={bars} alt="bars" className='h-[16px] w-[24px] opacity-50 md:hidden mr-5 invert filter cursor-pointer' onClick={handleToggleNav} />
                    </div>
                </div>
                <div className={`fixed top-0 right-0 bg-[#F3F2E8] md:bg-transparent md:items-center w-full h-full md:static md:w-auto md:flex md:justify-between md:flex-1 transition-transform duration-500 ease-in-out z-50 ${toggleNav ? 'transform translate-x-0' : 'transform translate-x-full md:transform-none'}`}>
                    <div className="flex justify-end p-5 md:hidden" onClick={handleToggleNav}>
                        <img src={close} alt="close" className='h-[36px] w-[36px] cursor-pointer invert filter' />
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
            <div className='my-10 flex flex-col lg:flex-row lg:gap-[100px] justify-between p-5 md:p-0 md:px-[50px] lg:py-5'>
                <div className='flex flex-col gap-[35px]'>
                    <Link to="/listings" className='flex gap-1 font-bold'> <img src={Arrow} alt="arrow-back" className='rotate-180' /> Back to lists</Link>
                    <p className='font-semibold text-[42px]'>{product.name}</p>
                    <p>{product.description}</p>
                    <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                        <h3 className="font-semibold text-[24px]">Color :</h3>
                        <div className="flex gap-2 items-center flex-wrap">
                            {product.colorVariants.map((variant, index) => (
                                <div
                                    key={index}
                                    className={`border-[2px] ${selectedColor === variant.color ? 'border-[#121211]' : 'border-transparent'} bg-[#F3F2E8] p-[2px] flex items-center justify-center rounded-full cursor-pointer`}
                                    onClick={() => handleColorClick(variant.color)}
                                >
                                    <p
                                        style={{ backgroundColor: variant.code }}
                                        className={`h-full w-full rounded-full flex items-center justify-center px-4 py-2 text-[#F3F2E8] font-light min-w-[100px]`}
                                    >
                                        {variant.color}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-[24px]">Qty :</h3>
                        <div className="flex items-center gap-2">
                            <button
                                className="border border-gray-400 p-2 rounded-full"
                                onClick={handleDecrease}
                            >
                                -
                            </button>
                            <span className="font-semibold text-[24px]">{quantity}</span>
                            <button
                                className="border border-gray-400 p-2 rounded-full"
                                onClick={handleIncrease}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div
                        className="bg-[#121211] cursor-pointer text-[#F3F2E8] px-4 py-2 rounded-full font-semibold text-[14px] mt-4 w-full flex justify-center md:w-fit gap-2"
                        onClick={() => handleAddToCart({ id: product.id, quantity, selectedColor })}
                    >
                        Add to Cart<span>${product.price}</span>
                    </div>

                </div>
                <div className='md:mt-[50px] lg:mt-[30px] w-[75%]'>
                    <div className='lg:w-[500px] w-full h-[500px] rounded-[12px] object-cover overflow-hidden'>
                        <img src={product.image} alt={product.name} className='w-full h-full' />
                    </div>
                </div>
            </div>

            <div className="my-10 p-5 md:px-[50px] md:py-5 hidden">
                <div className="flex gap-5 border-b-[1px] border-[#121211]/20 h-[42px]">
                    <div className='cursor-pointer' onClick={() => setActiveSection('details')}>
                        <button className={`px-4 leading-[8px] ${activeSection === 'details' ? 'text-[22px] text-[#121211] font-semibold' : ' text-[18px]'}`} >Details</button>
                        <div className={`w-full h-[4px] mt-4 rounded-full ${activeSection === 'details' ? 'bg-[#872009]' : ''}`}></div>
                    </div>
                    <div className='cursor-pointer' onClick={() => setActiveSection('specs')}>
                        <button className={`px-4 leading-[8px] ${activeSection === 'specs' ? 'text-[22px] text-[#121211] font-semibold' : ' text-[18px]'}`} >Product Specs</button>
                        <div className={`w-full h-[4px] mt-4 rounded-full ${activeSection === 'specs' ? 'bg-[#872009]' : ''}`}></div>
                    </div>

                    <div className='cursor-pointer' onClick={() => setActiveSection('reviews')}>
                        <button className={`px-4 leading-[8px] ${activeSection === 'reviews' ? 'text-[22px] text-[#121211] font-semibold' : ' text-[18px]'}`} >Reviews</button>
                        <div className={`w-full h-[4px] mt-4 rounded-full ${activeSection === 'reviews' ? 'bg-[#872009]' : ''}`}></div>
                    </div>

                    <div className='cursor-pointer' onClick={() => setActiveSection('warranty')}>
                        <button className={`px-4 leading-[8px] ${activeSection === 'warranty' ? 'text-[22px] text-[#121211] font-semibold' : ' text-[18px]'}`} >Warranty Info</button>
                        <div className={`w-full h-[4px] mt-4 rounded-full ${activeSection === 'warranty' ? 'bg-[#872009]' : ''}`}></div>
                    </div>
                </div>
                <div className=" py-5 rounded-lg">
                    {renderSectionContent()}
                </div>
            </div>

            <div className="m-5 md:m-0 md:mx-[50px] md:my-20">
                <p className="text-[32px] font-semibold">Other products you might like</p>
                <div className="flex mt-[30px] justify-between gap-[20px] flex-col md:flex-row">
                    {products.map((product, index) => {
                        if (index < 3) {
                            return (
                                <Link to={`/product/${product.id}`} key={index}>
                                    <div className="md:w-[232px] h-[277px] lg:w-[350px] lg:h-[300px] rounded-[12px] overflow-hidden">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-[#121211] font-semibold text-[20px] mt-2">{product.name}</p>
                                    <p className="font-semibold text-[#872009] text-[16px]">${product.price}</p>
                                </Link>
                            );
                        }
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
