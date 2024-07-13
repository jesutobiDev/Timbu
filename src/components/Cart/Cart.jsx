import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import cross from '../../assets/icons/cross.svg';
import Arrow from '../../assets/icons/arrow-forward.svg';
import { fetchProduct } from '../../services/fetchProduct';

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
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
            fetchProducts();
        } else {
            setProducts([]);
        }
    }, [cart]);


    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };


    const handleIncreaseQuantity = (id) => {
        increaseQuantity(id);
    };


    const handleDecreaseQuantity = (id) => {
        decreaseQuantity(id);
    };

  
    const handleClearCart = () => {
        clearCart();
        setProducts([]);
    };


    const calculateSubtotal = () => {
        return products.reduce((sum, product) => {
            const price = parseFloat(product.current_price); 
            const quantity = parseInt(product.quantity, 10);

            return sum + (price * quantity);
        }, 0);
    };

    return (
        <div className='bg-gray-600/10 w-full min-h-screen flex items-center justify-center md:p-[100px]'>
            <div className='bg-[#F3F2E8] rounded-[24px] w-[90%] md:w-[600px] min-h-[494px] shadow-2xl flex flex-col gap-[20px] p-[20px] md:p-[40px]'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-[42px]'>Cart</p>
                    <Link to='/listings' className='bg-[#872009] w-9 h-9 rounded-full flex items-center justify-center'>
                        <img src={cross} alt='cross' className='w-6 h-6' />
                    </Link>
                </div>
                <div>
                    {products.length === 0 ? (
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
                    ) : (
                        products.map((product, index) => (
                            <div key={index} className='flex justify-between items-center border-b-[2px] border-[#121211] py-[20px] pb-[20px] gap-[20px]'>
                                <div className='flex items-center gap-[20px]'>
                                    <img
                                        src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                                        alt={product.name}
                                        className='w-[72px] h-[72px] md:w-[100px] md:h-[100px] object-cover rounded-[12px]'
                                    />
                                    <div className='flex flex-col gap-[10px]'>
                                        <p className='font-semibold text-[14px] md:text-[16px] text-wrap'>{product.name}</p>
                                        <div className='flex gap-[5px] items-center'>
                                            <button
                                                className='border border-gray-400 p-2 rounded-full'
                                                onClick={() => handleDecreaseQuantity(product.id)}
                                            >
                                                -
                                            </button>
                                            <p className='text-[14px] md:text-[16px] text-gray-600'>Qty: {product.quantity}</p>
                                            <button
                                                className='border border-gray-400 p-2 rounded-full'
                                                onClick={() => handleIncreaseQuantity(product.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className='text-[14px] md:text-[20px] text-[#872009] font-light'>
                                            ₦ {parseFloat(product.current_price) * parseInt(product.quantity)}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='cursor-pointer' onClick={() => handleRemoveFromCart(product.id)}>
                                        Remove
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className='flex font-bold text-[18px] items-center justify-between '>
                    <p>Subtotal</p>
                    <p>₦ {calculateSubtotal().toFixed(2)}</p>
                </div>
                <div className='flex gap-2 flex-col'>
                    <form action='' className='flex flex-col gap-[20px]'>
                        <input
                            type='text'
                            placeholder='Coupon code'
                            className='w-full outline-none bg-[#12121126] h-[60px] pl-[20px] rounded-full placeholder:text-[#121211]'
                        />
                        <Link
                            to={products.length === 0 ? '#' : '/checkout'}
                            className={`flex gap-[10px] items-center rounded-full w-full h-[60px] justify-center  text-[#F3F2E8] ${products.length === 0 ? 'bg-[#121211]/70 cursor-not-allowed' : 'bg-[#121211]'
                                }`}
                            style={{ pointerEvents: products.length === 0 ? 'none' : 'auto' }}>
                            Proceed to Checkout <img src={Arrow} alt='' className='filter invert' />
                        </Link>
                    </form>
                    <button
                        className=' text-[#F3F2E8] px-4 py-2 rounded-full font-semibold bg-[#872009] h-[60px] mt-[20px]'
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
