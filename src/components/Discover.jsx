// Discover.js
import { useState } from "react";
import products from "../data";

const Discover = () => {
    const [filters, setFilters] = useState([
        { name: 'All Products', clicked: true },
        { name: 'Living Room', clicked: false },
        { name: 'Bedroom', clicked: false },
        { name: 'Outdoor', clicked: false },
    ]);

    const handleFilterClick = (filterName) => {
        setFilters(filters.map(filter => ({
            ...filter,
            clicked: filter.name === filterName
        })));
    };

    return (
        <div className="m-5 md:m-0 md:mx-[50px] md:my-10">
            <div className="flex justify-between  text-[#121211]">
                <p className="text-[42px] font-semibold w-1/2">Discover Unparalleled Furniture Designs</p>
                <div className="flex gap-2 items-center flex-wrap">
                    {filters.map((filter, index) => (
                        <div key={index} className={`w-[120px] h-[45px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 font-medium ${filter.clicked ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-transparent  text-[#121211] border-[2px] border-[#121211]'}`} onClick={() => handleFilterClick(filter.name)}>
                            {filter.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-[50px] mt-[50px]">
                {
                    products.map((product, index) => (
                        <div key={index}>
                            <div className="w-[300px] h-[300px] rounded overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full" />
                            </div>
                            <p className="text-[#121211] font-semibold text-[20px] mt-1">{product.name}</p>
                            <p className="font-semibold text-[#872009] text-[16px]">{product.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Discover;
