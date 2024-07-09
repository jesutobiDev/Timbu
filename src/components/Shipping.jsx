import React from 'react'

const Shipping = ({setActiveSection}) => {
    return (
        <form action="" className='mt-[20px] flex flex-col gap-[30px]'>
            <div className='flex justify-between gap-[20px] items-center flex-col md:flex-row w-full'>
                <input type="text" placeholder='First Name' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
                <input type="text" placeholder='First Name' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='flex justify-between gap-[20px] items-center flex-col md:flex-row w-full'>
                <input type="text" placeholder='Street Address' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
                <input type="text" placeholder='Zip Code' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='flex justify-between gap-[20px] items-center flex-col md:flex-row w-full'>
                <input type="text" placeholder='City' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
                <input type="text" placeholder='State' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='w-full bg-[#121211] text-[#F3F2E8] py-3 rounded-full mt-2 cursor-pointer flex items-center justify-center'  onClick={() => setActiveSection('payment')}>Continue to Payment Method</div>
        </form>
    )
}

export default Shipping