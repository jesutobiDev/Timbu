import React from 'react';

const AddToCartModal = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900/50'>
            <div className='bg-white rounded-lg p-8 max-w-sm flex flex-col gap-[20px] justify-center items-center'>
                <p className='text-center text-xl font-semibold'>Item added to cart!</p>
            </div>
        </div>
    );
};

export default AddToCartModal;
