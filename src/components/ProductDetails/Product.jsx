import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data';
import Cart from "../../assets/icons/black-cart.svg";
import { TfiMenu } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow-forward.svg";
import Footer from "../Footer"
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
                    <div className='flex gap-[20px] justify-between border-y-[2px] py-[40px]'>
                        <p>{product.description}</p>
                        <p>{product.availability}</p>
                        <div className='flex gap-[15px] flex-col'>
                            {product.characteristics.map((char, index) => (
                                <div key={index} className='flex items-center gap-[10px] mb-2'>
                                    <img src={char.icon} className='w-6 h-6' alt={char.icon_text} />
                                    <p className='text-nowrap'>{char.icon_text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'specs':
                return <ul>{product.specs.map((spec, index) => <li key={index}>{spec}</li>)}</ul>;
            case 'reviews':
                return <div>{product.reviews.map((review, index) => <p key={index}>{review}</p>)}</div>;
            case 'warranty':
                return <p>{product.warrantyInfo}</p>;
            default:
                return null;
        }
    };


    return (
        <div className="">
            <div className="w-full h-auto relative flex md:gap-10 items-center font-poppins p-5 md:p-0 md:px-[50px] md:py-5">
                <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
                    <p className="text-[42px] font-semibold">Timbu</p>
                    <TfiMenu className='h-[40px] w-[40px] opacity-50  md:hidden' onClick={handleToggleNav} />
                </div>
                <div className={`bg-darkViolet md:bg-transparent md:items-center absolute md:static top-[100px] overflow-hidden md:overflow-auto w-[90%] md:w-auto md:flex-1 md:h-auto transition-all duration-500 ease rounded-2xl md:rounded-none md:text-gray cursor-pointer font-light text-2xl md:text-lg flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 z-10 ${toggleNav ? 'h-[470px] p-10' : 'h-0'}`}>
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
                        <Link to="/listings" className="bg-[#121211] text-[#F3F2E8] px-4 py-2 rounded-full font-semibold text-[14px]">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className='my-10 flex gap-[100px] justify-between p-5 md:p-0 md:px-[50px] md:py-5'>
                <div className='flex flex-col gap-[35px]'>
                    <Link to="/listings" className='flex gap-1 font-bold'> <img src={Arrow} alt="arrow-back" className='rotate-180' /> Back to lists</Link>
                    <p className='font-semibold text-[42px]'>{product.name}</p>
                    <p>{product.description}</p>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-[24px]">Color :</h3>
                        <div className="flex gap-2 items-center">
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
                        className="bg-[#121211] cursor-pointer text-[#F3F2E8] px-4 py-2 rounded-full font-semibold text-[14px] mt-4 w-fit flex gap-2"
                        onClick={() => handleAddToCart({ id: product.id, quantity, selectedColor })}
                    >
                        Add to Cart<span>${product.price}</span>
                    </div>

                </div>
                <div>
                    <div className='w-[500px] h-[500px] rounded-[12px] object-cover overflow-hidden'>
                        <img src={product.image} alt={product.name} className='w-full h-full' />
                    </div>
                </div>
            </div>

            <div className="my-10 p-5 md:px-[50px] md:py-5">
                <div className="flex gap-5 mb-5">
                    <button className={`px-4 py-2 rounded-full ${activeSection === 'details' ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveSection('details')}>Details</button>
                    <button className={`px-4 py-2 rounded-full ${activeSection === 'specs' ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-gray-800'}`} >Product Specs</button>
                    <button className={`px-4 py-2 rounded-full ${activeSection === 'reviews' ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-gray-800'}`} >Reviews</button>
                    <button className={`px-4 py-2 rounded-full ${activeSection === 'warranty' ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-gray-800'}`} >Warranty Info</button>
                </div>
                <div className=" p-5 rounded-lg">
                    {renderSectionContent()}
                </div>
            </div>

            <div className="m-5 md:m-0 md:mx-[50px] md:my-20">
                <p className="text-[32px] font-semibold">Other products you might like</p>
                <div className="flex mt-[30px] justify-between">
                    {products.map((product, index) => {
                        if (index < 3) {
                            return (
                                <Link to={`/product/${product.id}`} key={index}>
                                    <div className="w-[350px] h-[300px] rounded-[12px] overflow-hidden">
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
