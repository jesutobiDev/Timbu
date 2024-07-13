import React, { useState, useContext, useEffect } from 'react';
import Cart from "../../assets/icons/black-cart.svg";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import Arrow from "../../assets/icons/arrow-forward.svg";
import Shipping from "./Shipping";
import Payment from './Payment';
import Finalize from "./Finalize";
import bars from "../../assets/icons/bars.svg";
import close from "../../assets/icons/close.svg";
import { fetchProduct } from '../../services/fetchProduct';
import CartItem from '../Cart/CartItem';
import DefaultImage from "../../assets/images/about.png"

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
        <div className='p-5 md:p-0 md:px-[50px] md:py-5 text-wrap w-full'>
            <div className="w-full h-auto relative md:p-0 md:flex md:gap-10 md:px-[0] md:py-5 font-poppins md:items-center">
                <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
                    <p className="text-[42px] font-semibold text-[#121211] ">Timbu</p>
                    <div className='flex gap-[20px] items-center'>
                        <Link to="/cart" className="relative md:hidden">
                            <img src={Cart} alt="cart" className={`${toggleNav ? "invert filter" : ""}`} />
                            {numberOfCartItems > 0 && (
                                <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-[#872009] rounded-full w-4 h-4 flex items-center justify-center text-[#F3F2E8] text-xs">
                                    {numberOfCartItems}
                                </div>
                            )}
                        </Link>
                        <img src={bars} alt="bars" className='h-[16px] w-[24px] opacity-50 md:hidden invert filter cursor-pointer' onClick={handleToggleNav} />
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
            <div className='w-full h-[155px] md:h-[360px] rounded-[24px] my-10 relative overflow-hidden '>
            <img src={numberOfCartItems > 0 ? `https://api.timbu.cloud/images/${firstCartItemImage}` : DefaultImage} alt="Cart Item" className='w-full h-full object-cover absolute inset-0' />
                <div className='bg-[#121211]/30 w-full h-full z-10 absolute p-12 flex items-end'>
                    <p className='text-[#F3F2E8] font-semibold text-[42px]'>Checkout</p>
                </div>
            </div>
            {numberOfCartItems > 0 ? (
                <div className='flex flex-col-reverse lg:flex-row gap-[30px] justify-between mb-[20px]'>
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
                        <div className=' flex'>
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
