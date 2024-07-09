import React from 'react'

const Payment = ({setActiveSection}) => {
    return (
        <form action="" className='mt-[20px] flex flex-col gap-[30px]'>
            <div className='flex justify-between gap-[20px] items-center flex-col md:flex-row w-full'>
                <input type="text" placeholder='Card Holder’s Name' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='flex justify-between gap-[20px] items-center flex-col md:flex-row w-full'>
                <input type="text" placeholder='Card Number' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='flex justify-between gap-[20px] items-center flex-col md:flex-row w-full'>
                <input type="text" placeholder='Expires' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
                <input type="text" placeholder='CVV' className='bg-[#12121126] flex-1 w-full px-[20px] py-[15px] rounded-full placeholder:text-[#121211]' />
            </div>
            <div className='w-full bg-[#121211] text-[#F3F2E8] py-3 rounded-full mt-2 cursor-pointer flex items-center justify-center'  onClick={() => setActiveSection('finalize')}>Confirm Payment</div>
        </form>
    )
}

export default Payment