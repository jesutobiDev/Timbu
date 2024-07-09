import React, { useState } from 'react';
import chair from '../../assets/icons/chair.svg';
import sofa from '../../assets/icons/sofa.svg';
import table from "../../assets/icons/table.svg";
import rug from "../../assets/icons/rug.svg";
import dresser from "../../assets/icons/dresser.svg";
import outdoors from "../../assets/icons/outdoors.svg";
import caretDown from "../../assets/icons/caret-down.svg";

const SideNav = () => {
    const [filters, setFilters] = useState([
        { name: 'Chair', icon: chair, clicked: true },
        { name: 'Sofa', icon: sofa, clicked: false },
        { name: 'Table', icon: table, clicked: false },
        { name: 'Rug', icon: rug, clicked: false },
        { name: 'Dresser', icon: dresser, clicked: false },
        { name: 'Outdoors', icon: outdoors, clicked: false },
    ]);
    const [showAll, setShowAll] = useState(false);

    const handleFilterClick = (name) => {
        if (name === 'Chair') {
            setShowAll(!showAll);
        }
        const updatedFilters = filters.map(filter =>
            filter.name === name ? { ...filter, clicked: !filter.clicked } : filter
        );
        setFilters(updatedFilters);
    };

    return (
        <div className={`bg-[#F3F2E8] w-[230px] md:w-auto md:p-0 rounded-[24px] md:rounded-none absolute md:static top-0 left-0 ${showAll ? 'shadow p-[20px]' : ''}`}>
            {filters.map((filter, index) => (
                <div
                    key={index}
                    className={`h-[60px] md:w-[168px] lg:w-[280px] rounded-full items-center justify-start cursor-pointer transition-all duration-500 font-semibold p-4 flex gap-2 mb-4 text-[18px] ${filter.clicked ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-[#12121126] text-[#121211]'} ${showAll || filter.name === 'Chair' ? '' : 'hidden sm:flex'}`}
                    onClick={() => handleFilterClick(filter.name)}
                >
                    <img src={filter.icon} alt="filter-icon" className={`w-9 h-9 ${filter.clicked ? "filter invert" : ""}`} />
                    {filter.name}
                    {filter.name === 'Chair' && (
                        <img
                            src={caretDown}
                            alt="caret-down-icon"
                            className={`ml-auto w-6 h-6 mr-2 mt-auto mb-auto transition-transform duration-300 ${showAll ? 'rotate-180 filter invert' : ''} sm:hidden`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SideNav;
