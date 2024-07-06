import React from 'react'
import about from "../assets/images/about.png"

const About = () => {
  return (
    <div className='relative m-5 md:m-0 md:mx-[50px] md:my-20 rounded-[25px] overflow-hidden h-[650px] p-12 flex items-end'>
        <img src={about} alt="about-bg" className='w-full h-full absolute top-0 left-0 inset-0' />
        <div className='bg-[#121211] absolute z-50 h-auto rounded-[20px] w-[500px] p-10 text-[#F3F2E8]'>
            <p className='font-semibold text-[42px]'>About Furni</p>
            <p className='text-[14px] tracking-wider leading-[25px] mb-4'>Furni redefines modern living through minimalist furniture design. Our collection celebrates simplicity with clean lines, premium natural materials, and thoughtful craftsmanship that strips away the unnecessary. Experience the beauty of intentional, understated elegance in versatile pieces made to elevate any interior space.</p>
            <button className="bg-[#F3F2E8] text-black px-4 py-2 rounded-full font-semibold text-[14px]">Contact Us</button>
        </div>
    </div>
  )
}

export default About