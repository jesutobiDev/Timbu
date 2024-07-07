import React from 'react'
import { useState } from "react"
import chair from '../../assets/icons/chair.svg'
import sofa from '../../assets/icons/sofa.svg'
import table from "../../assets/icons/table.svg"
import rug from "../../assets/icons/rug.svg"
import dresser from "../../assets/icons/dresser.svg"
import outdoors from "../../assets/icons/outdoors.svg"

const SideNav = () => {
    const [filters, setFilters] = useState([
        { name: 'Chair', icon: chair, clicked: true },
        { name: 'Sofa', icon: sofa, clicked: false },
        { name: 'Table', icon: table, clicked: false },
        { name: 'Rug', icon: rug, clicked: true },
        { name: 'Dresser', icon: dresser, clicked: false },
        { name: 'Outdoors', icon: outdoors, clicked: false },
    ]);
    return (
        <div>
            {filters.map((filter, index) => (
                <div
                    key={index}
                    className={`h-[60px] w-[280px] rounded-full items-center justify-start cursor-pointer transition-all duration-500 font-semibold p-4 flex gap-2 mb-4 bg-[#12121126] text-[18px]`}
                    onClick={() => handleFilterClick(filter.name)}
                >
                    <img src={filter.icon} alt="filter-icon" className='w-9 h-9' />
                    {filter.name}
                </div>
            ))}
        </div>
    )
}

export default SideNav