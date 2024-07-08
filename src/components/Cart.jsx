import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './Context/CartContext';
import cross from "../assets/icons/cross.svg";
import Arrow from "../assets/icons/arrow-forward.svg";
import products from '../data'; 

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

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
    

    return (
        <div className='bg-gray-600/10 w-full min-h-screen flex items-center justify-center p-[100px]'>
            <div className='bg-[#F3F2E8] rounded-[24px] w-[600px] min-h-[494px] shadow-2xl flex flex-col gap-[20px] p-[40px]'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-[42px]'>Cart</p>
                    <Link to="/listings" className="bg-[#872009] w-9 h-9 rounded-full flex items-center justify-center">
                        <img src={cross} alt="cross" className='w-6 h-6' />
                    </Link>
                </div>
                <div>
                    {cart.length === 0 ? (
                        <div className='my-2 flex flex-col items-center gap-[15px]'>
                            <p className='text-[#000000]/30 flex items-center justify-center font-semibold text-[24px]'>There are no items in your cart</p>
                            <Link to="/listings" className='flex gap-[10px] font-semibold items-center justify-center border-[2px] border-[#121211] rounded-full w-fit px-[20px] py-[10px]'><img src={Arrow} alt="arrow-back" className='rotate-180' />  Go back to product listings</Link>
                        </div>
                    ) : (
                        cart.map((item, index) => {
                            const product = products.find(p => p.id === item.id);
                            if (!product) return null; 
                            return (
                                <div key={index} className='flex justify-between items-center border-b-[2px] border-[#121211] py-[20px] pb-[20px]'>
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
                        })
                    )}
                </div>
                <div className='flex font-bold text-[18px] items-center justify-between '>
                    <p>Subtotal</p>
                    <p>${calculateSubtotal()}</p>
                </div>
                <form action="" className='flex flex-col gap-[20px]'>
                    <input type="text" placeholder='Coupon code' className='w-full outline-none bg-[#12121126] h-[60px] pl-[20px] rounded-full placeholder:text-[#121211]' />
                    <Link to="/checkout" className='flex gap-[10px] items-center bg-[#121211] rounded-full w-full text-[#F3F2E8] h-[60px] justify-center'>Proceed to Checkout <img src={Arrow} alt="" className='filter invert' /></Link>
                </form>
            </div>
        </div>
    );
}

export default Cart;
