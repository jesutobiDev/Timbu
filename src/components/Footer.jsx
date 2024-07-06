import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#121211] text-[#F3F2E8] p-5 md:p-0 md:gap-20 md:px-[50px] md:pt-20 md:pb-[20px] flex flex-col'>
      <div className='flex justify-between flex-wrap w-full items-start'>
        <p className="text-[#F3F2E8] text-[42px] font-semibold">Timbu</p>
        <div className='font-extralight text-[14px] flex flex-col gap-2'>
          <p className='font-semibold text-base'>More</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div className='font-extralight text-[14px] flex flex-col gap-2'>
          <p className='font-semibold text-base'>Collections</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div className='font-extralight text-[14px] flex flex-col gap-2'>
          <p className='font-semibold text-base'>About</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <form action="">
          <p className='font-semibold text-[18px] mb-4'>Join Our Newsletter</p>
          <div className='flex gap-[15px]'>
            <input type="email" name="email" id="email" placeholder='Your Email Address' className='bg-transparent border border-[#F3F2E8] rounded-full h-[40px] px-4 placeholder:text-[#F3F2E8]/50 placeholder:text-[12px]' />
            <input type="submit" value="Submit" className='bg-[#F3F2E8] text-black px-4 py-2 rounded-full font-semibold text-[14px] h-[40px]' />
          </div>
        </form>
      </div>
      <p className='font-extralight'>Copyright Timbu, LLC 2024</p>
    </div>
  )
}

export default Footer