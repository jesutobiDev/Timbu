import React from 'react';
import products from "../../data";
import { Link } from 'react-router-dom';
import arrowFoward from "../../assets/icons/arrow-forward.svg"

const Discover = () => {

    return (
        <div className="m-5 md:m-0 md:mx-[50px] md:my-10">
            <div className="flex-col md:flex-row flex justify-between text-[#121211] items-center gap-[30px]">
                <p className="text-[32px] lg:text-[42px] font-semibold md:w-1/2">Discover Unparalleled Furniture Designs</p>
                <Link to="/listings" className="bg-transparent text-[#121211]  border-[#121211] text-[14px] h-[40px] rounded-full items-center justify-center cursor-pointer transition-all duration-500 font-semibold border-[2px] p-4 flex gap-2 w-full md:w-fit">
                    See All Products
                    <img src={arrowFoward} alt="arrow-forward w-10 h-10" />
                </Link>

            </div>
            <div className="flex mt-[50px] justify-between flex-col md:flex-row items-center gap-[20px]">
                {products.map((product, index) => {
                    if (index < 3) {
                        return (
                            <Link to={`/product/${product.id}`} key={index}>
                                <div className="w-[350px] md:w-[230px] lg:w-[350px] h-[300px] rounded-[12px] overflow-hidden">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <p className="text-[#121211] font-semibold text-[20px] mt-2">{product.name}</p>
                                <p className="font-semibold text-[#872009] text-[16px]">${product.price}</p>
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Discover;
