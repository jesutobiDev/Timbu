import React, { useState, useContext } from 'react';
import Cart from "../assets/icons/black-cart.svg";
import { TfiMenu } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import { CartContext } from './Context/CartContext';
import products from '../data';
import Arrow from "../assets/icons/arrow-forward.svg";

const Checkout = ({ handleToggleNav, toggleNav }) => {
    const [activeSection, setActiveSection] = useState('details');
    const { cart, removeFromCart } = useContext(CartContext);
    const numberOfCartItems = cart.length;

    const firstCartItemImage = numberOfCartItems > 0 ? products.find(p => p.id === cart[0].id)?.image : '';

    const calculateSubtotal = () => {
        return cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            if (!product) return sum;

            const price = parseInt(product.price);
            const quantity = parseInt(item.quantity);

            return sum + (price * quantity);
        }, 0);
    };

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    const shippingFee = 20;
    const couponDiscount = 0;
    const subtotal = calculateSubtotal();
    const total = subtotal + shippingFee + couponDiscount;

    const getRandomProductImage = () => {
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex].image;
    };

    const randomProductImage = getRandomProductImage();

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'details':
                return (
                    <div className=''>
                        <p>Details</p>
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
        <div className='p-5 md:p-0 md:px-[50px] md:py-5 text-wrap'>
            <div className="w-full h-auto relative md:flex md:gap-10 font-poppins">
                <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
                    <p className="text-[42px] font-semibold">Timbu</p>
                    <TfiMenu className='h-[40px] w-[40px] opacity-50 md:hidden' onClick={handleToggleNav} />
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
            <div className='w-full h-[360px] rounded-[24px] my-10 relative overflow-hidden '>
                <img src={numberOfCartItems > 0 ? firstCartItemImage : randomProductImage} alt="Cart Item" className='w-full h-full object-cover absolute inset-0' />
                <div className='bg-[#121211]/30 w-full h-full z-10 absolute p-12 flex items-end'>
                    <p className='text-[#F3F2E8] font-semibold text-[42px]'>Checkout</p>
                </div>
            </div>
            {numberOfCartItems > 0 ? (
                <div className='flex gap-[50px] justify-between mb-[50px]'>
                    <div className="flex-1 ">
                        <div className="flex gap-5 pb-[20px] h-[60px] border-b-[2px] border-[#121211]/30">
                            <button className={`px-4 py-2 rounded-full ${activeSection === 'details' ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveSection('details')}>Shipping Details</button>
                            <button className={`px-4 py-2 rounded-full ${activeSection === 'specs' ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-gray-800'}`} >Payment Methods</button>
                            <button className={`px-4 py-2 rounded-full ${activeSection === 'reviews' ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-gray-800'}`} >3. Finalize</button>
                        </div>
                        <div className=" p-5 rounded-lg">
                            {renderSectionContent()}
                        </div>
                    </div>
                    <div>
                        <p className='text-[#121211] pb-[20px] border-b-[2px] border-[#121211]/30 font-semibold text-[24px] h-[60px]'>Cart Summary</p>
                        <div>
                            {cart.map((item, index) => {
                                const product = products.find(p => p.id === item.id);
                                if (!product) return null;
                                return (
                                    <div key={index} className='flex justify-between gap-[50px] items-center border-b-[2px] border-[#121211]/30 py-[20px] pb-[20px]'>
                                        <div className='flex items-center gap-[20px]'>
                                            <img src={product.image} alt={product.name} className='w-[100px] h-[100px] object-cover rounded-[12px]' />
                                            <div>
                                                <p className='font-semibold text-[20px]'>{product.name}</p>
                                                <p className='text-[16px] text-gray-600'>Color: {item.selectedColor}</p>
                                                <p className='text-[16px] text-gray-600'>Qty: {item.quantity}</p>
                                                <p className='text-[20px] text-[#872009] font-light'>${product.price * item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className='cursor-pointer' onClick={() => handleRemoveFromCart(item.id)}>Remove</p>
                                    </div>
                                );
                            })}
                        </div>
                        <p className='text-[#121211] py-[20px] border-b-[2px] border-[#121211]/30 font-semibold text-[24px]'>Order Summary</p>
                        <div className='flex mt-[20px] text-[18px] items-center justify-between '>
                            <p>Subtotal</p>
                            <p>${subtotal}</p>
                        </div>
                        <div className='flex mt-[20px] text-[18px] items-center justify-between '>
                            <p>Shipping</p>
                            <p>${shippingFee}</p>
                        </div>
                        <div className='flex mt-[20px] text-[18px] items-center justify-between border-b-[2px] border-[#121211]/30 pb-[10px] '>
                            <p>Coupon Discount</p>
                            <p>${couponDiscount}</p>
                        </div>
                        <div className='flex mt-[20px] font-bold text-[18px] items-center justify-between '>
                            <p>Total</p>
                            <p>${total}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='my-2 flex flex-col items-center gap-[15px]'>
                    <p className='text-[#000000]/30 flex items-center justify-center font-semibold text-[24px]'>There are no items in your cart</p>
                    <Link to="/listings" className='flex gap-[10px] font-semibold items-center justify-center border-[2px] border-[#121211] rounded-full w-fit px-[20px] py-[10px]'>
                        <img src={Arrow} alt="arrow-back" className='rotate-180' />  Go back to product listings
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Checkout;


