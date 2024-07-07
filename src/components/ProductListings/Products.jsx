import React from 'react'
import SideNav from './SideNav'
import { useState } from "react"
import date from '../../assets/icons/calendar.svg'
import price from '../../assets/icons/price.svg'
import star from "../../assets/icons/star.svg"
import products from '../../data'

const Products = () => {
    const [filters, setFilters] = useState([
        { name: 'Date', icon: date,  clicked: true },
        { name: 'Price', icon: price,   clicked: false },
        { name: 'Relevance', icon: star,  clicked: false },
    ]);
    return (
        <div className='p-5 md:p-0 md:gap-10 md:px-[50px] md:py-5'>
            <div className=' flex justify-between items-center'>
                <p className='font-bold'>Showing {"112"} Results</p>
                <div className='flex items-center gap-2'>
                    <p className='font-bold text-[18px]'>Sort By :</p>
                    <div className="flex gap-2 items-center flex-wrap">
                    {filters.map((filter, index) => (
                        <div
                            key={index}
                            className={` h-[40px] rounded-full items-center justify-center cursor-pointer transition-all duration-500 font-semibold border-[2px] border-[#121211] p-4 flex gap-2`}
                            onClick={() => handleFilterClick(filter.name)}
                        >
                            <img src={filter.icon} alt="filter-icon" className='w-6 h-6' />
                            {filter.name}
                        </div>
                    ))}
                </div>
                </div>
                <div className='w-auto h-[40px] rounded-full flex items-center justify-center cursor-pointer bg-transparent  border-[#121211] border-[2px] p-4 font-semibold'>Reset Filters</div>
            </div>
            <div className='flex justify-between my-10 gap-[50px]' >
                <SideNav />
                <div className='flex flex-1 flex-wrap gap-[30px]'>
                {products.map((product, index) => (
                    <div key={index}>
                        <div className="w-[250px] h-[350px] rounded-[12px] overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[#121211] font-semibold text-[20px] mt-2">{product.name}</p>
                        <p className="font-semibold text-[#872009] text-[16px]">{product.price}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Products