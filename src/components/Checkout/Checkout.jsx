import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import Arrow from "../../assets/icons/arrow-forward.svg";
import Shipping from "./Shipping";
import Payment from './Payment';
import Finalize from "./Finalize";
import Header from './Header';

import { fetchProduct } from '../../services/fetchProduct';
import CartItem from '../Cart/CartItem';


const Checkout = ({ handleToggleNav, toggleNav }) => {
    const [activeSection, setActiveSection] = useState('shipping');
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const productDetails = await Promise.all(
                    cart.map(async (item) => {
                        const product = await fetchProduct(item.id);
                        return {
                            ...product,
                            quantity: item.quantity,
                            selectedColor: item.selectedColor,
                        };
                    })
                );
                setProducts(productDetails);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        if (cart.length > 0) {
            fetchCartItems();
        } else {
            setProducts([]);
        }
    }, [cart]);

    const numberOfCartItems = cart.length;
    const firstCartItemImage = numberOfCartItems > 0 ? products[0]?.photos[0]?.url : '';

    const calculateSubtotal = () => {
        return products.reduce((sum, item) => {
            const price = parseFloat(item.current_price);
            const quantity = parseInt(item.quantity, 10);
            return sum + (price * quantity);
        }, 0);
    };



    const shippingFee = 20;
    const couponDiscount = 0;
    const subtotal = calculateSubtotal();
    const total = subtotal + shippingFee + couponDiscount;



    const renderSectionContent = () => {
        switch (activeSection) {
            case 'shipping':
                return <Shipping setActiveSection={setActiveSection} />;
            case 'payment':
                return <Payment setActiveSection={setActiveSection} />;
            case 'finalize':
                return <Finalize />;
            default:
                return null;
        }
    };


    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    const handleIncreaseQuantity = (id) => {
        increaseQuantity(id);
    };

    const handleDecreaseQuantity = (id) => {
        decreaseQuantity(id);
    };

    return (
        <div className='w-full'>
            <Header handleToggleNav={handleToggleNav} toggleNav={toggleNav} />
            {numberOfCartItems > 0 ? (
                <div className='flex flex-col-reverse lg:flex-row gap-[30px] justify-between mb-[20px] p-5 md:p-0 md:px-[50px] md:py-5 text-wrap w-full'>
                    <div className="flex-1">
                        <div className="flex gap-5 border-b-[1px] border-[#121211]/20 h-[42px]">
                            <div className='cursor-pointer'>
                                <button className={`px-4 leading-[8px]  ${activeSection === 'shipping' ? 'text-[22px] text-[#121211] font-semibold' : 'text-[18px] hidden md:block'}`}>
                                    1. Shipping Details
                                </button>
                                <div className={`w-full h-[4px] mt-4 rounded-full ${activeSection === 'shipping' ? 'bg-[#872009]' : ''}`}></div>
                            </div>
                            <div className='cursor-pointer'>
                                <button className={`px-4 leading-[8px] ${activeSection === 'payment' ? 'text-[22px] text-[#121211] font-semibold' : 'text-[18px] hidden md:block'}`}>
                                    2. Payment Method
                                </button>
                                <div className={`w-full h-[4px] mt-4 rounded-full ${activeSection === 'payment' ? 'bg-[#872009]' : ''}`}></div>
                            </div>
                            <div className='cursor-pointer'>
                                <button className={`px-4 leading-[8px] ${activeSection === 'finalize' ? 'text-[22px] text-[#121211] font-semibold' : 'text-[18px] hidden md:block'}`}>
                                    3. Finalize
                                </button>
                                <div className={`w-full h-[4px] mt-4 rounded-full ${activeSection === 'finalize' ? 'bg-[#872009]' : ''}`}></div>
                            </div>
                        </div>
                        <div className="py-5 rounded-lg">
                            {renderSectionContent()}
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-[#121211] border-b-[1px] border-[#121211]/30 font-semibold text-[24px] h-[42px] leading-[8px]'>Cart Summary</p>
                        <div className=' flex flex-col'>
                            {products.map((product, index) => (
                                <CartItem
                                    key={index}
                                    product={product}
                                    handleDecreaseQuantity={handleDecreaseQuantity}
                                    handleIncreaseQuantity={handleIncreaseQuantity}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />
                            ))}
                        </div>
                        <div className='flex justify-between my-5'>
                            <p className='text-[20px] md:text-[18px] text-[#121211]'>Subtotal</p>
                            <p className='text-[20px] md:text-[18px] text-[#121211]'>₦ {subtotal.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between my-5'>
                            <p className='text-[20px] md:text-[18px] text-[#121211]'>Shipping fee</p>
                            <p className='text-[20px] md:text-[18px] text-[#121211]'>₦ {shippingFee.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between my-5'>
                            <p className='text-[20px] md:text-[18px] text-[#121211]'>Coupon Discount</p>
                            <p className='text-[20px] md:text-[18px] text-[#121211]'>₦ {couponDiscount.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between my-5 border-t-[1px] pt-[10px] border-[#121211]'>
                            <p className='font-semibold text-[20px] md:text-[18px] text-[#121211]'>Total</p>
                            <p className='font-semibold text-[20px] md:text-[18px] text-[#121211]'>₦ {total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='my-2 flex flex-col items-center gap-[15px]'>
                    <p className='text-[#000000]/30 flex items-center justify-center font-semibold text-[24px] text-center'>
                        There are no items in your cart
                    </p>
                    <Link
                        to='/listings'
                        className='flex gap-[10px] font-semibold items-center justify-center border-[2px] border-[#121211] rounded-full w-fit px-[20px] py-[10px]'>
                        <img src={Arrow} alt='arrow-back' className='rotate-180' /> Go back to product listings
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;
