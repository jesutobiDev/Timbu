import React from 'react'

const Shipping = () => {
    return (
        <form action="" className='mt-[20px] flex flex-col gap-[30px]'>
            <div className='flex justify-between gap-[20px] items-center'>
                <input type="text" placeholder='First Name' className='bg-[#12121126] flex-1 px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
                <input type="text" placeholder='First Name' className='bg-[#12121126] flex-1 px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='flex justify-between gap-[20px] items-center'>
                <input type="text" placeholder='Street Address' className='bg-[#12121126] flex-1 px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
                <input type="text" placeholder='Zip Code' className='bg-[#12121126] flex-1 px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='flex justify-between gap-[20px] items-center'>
                <input type="text" placeholder='City' className='bg-[#12121126] flex-1 px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
                <input type="text" placeholder='State' className='bg-[#12121126] flex-1 px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
        </form>
    )
}

export default Shipping