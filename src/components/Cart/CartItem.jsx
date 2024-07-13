import React from 'react';

const CartItem = ({ product, handleDecreaseQuantity, handleIncreaseQuantity, handleRemoveFromCart }) => {
    return (
        <div className='flex justify-between items-center border-b-[1px] border-[#121211] py-[20px] pb-[20px] gap-[20px]'>
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
    );
};



export default CartItem;
