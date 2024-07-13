import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowForward from '../../assets/icons/arrow-forward.svg';
import { fetchProducts } from '../../services/fetchProducts';

const Discover = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const itemsPerPage = 3; 

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const data = await fetchProducts({ page: 1, limit: itemsPerPage });
                const processedFeaturedProducts = data.items.map(product => ({
                    ...product,
                    image: Array.isArray(product.photos) && product.photos.length > 0
                        ? product.photos[0].url
                        : '', 
                    price: Array.isArray(product.current_price) && product.current_price.length > 0
                        ? product.current_price[0].NGN[0]
                        : 0, 
                }));
                setFeaturedProducts(processedFeaturedProducts);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="m-5 md:m-0 md:mx-[50px] md:my-10">
            <div className="flex-col md:flex-row flex justify-between text-[#121211] items-center gap-[30px]">
                <p className="text-[32px] lg:text-[42px] font-semibold md:w-1/2">Discover Unparalleled Furniture Designs</p>
                <Link to="/listings" className="bg-transparent text-[#121211]  border-[#121211] text-[14px] h-[40px] rounded-full items-center justify-center cursor-pointer transition-all duration-500 font-semibold border-[2px] p-4 flex gap-2 w-full md:w-fit">
                    See All Products
                    <img src={arrowForward} alt="arrow-forward w-10 h-10" />
                </Link>
            </div>
            <div className="flex mt-[50px] justify-between flex-col md:flex-row  gap-[20px] items-center md:items-start">
                {featuredProducts.slice(0, 3).map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id} className='w-[350px] md:w-[230px] lg:w-[350px]'>
                        <div className=" h-[300px] rounded-[12px] overflow-hidden">
                            <img src={`https://api.timbu.cloud/images/${product.image}`} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[#121211] font-semibold text-[20px] mt-2">{product.name}</p>
                        <p className="font-semibold text-[#872009] text-[16px]">₦ {product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Discover;
