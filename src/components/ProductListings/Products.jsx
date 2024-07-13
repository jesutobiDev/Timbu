import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import date from '../../assets/icons/calendar.svg';
import price from '../../assets/icons/price.svg';
import star from "../../assets/icons/star.svg";
import filterIcon from "../../assets/icons/filter.svg";
import { fetchProducts } from "../../services/fetchProducts";

const Products = () => {
  const initialFilters = [
    { name: 'Date', icon: date, clicked: false },
    { name: 'Price', icon: price, clicked: false },
    { name: 'Relevance', icon: star, clicked: false },
  ];

  const [filters, setFilters] = useState(initialFilters);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProducts({ page: currentPage, limit: itemsPerPage });
        const processedProducts = fetchedProducts.items.map(product => ({
          ...product,
          image: Array.isArray(product.photos) && product.photos.length > 0
            ? product.photos[0].url
            : '', 
          price: Array.isArray(product.current_price) && product.current_price.length > 0
            ? product.current_price[0].NGN[0]
            : 0, 
        }));
        setProducts(processedProducts);
        setTotalPages(Math.ceil(fetchedProducts.total / itemsPerPage));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  const handleFilterClick = (name) => {
    const updatedFilters = filters.map(filter =>
      filter.name === name ? { ...filter, clicked: true } : { ...filter, clicked: false }
    );
    setFilters(updatedFilters);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div className='w-full h-auto flex items-center justify-center font-bold text-[24px] py-[100px]'>Loading...</div>;
  }

  return (
    <div className='p-5 md:p-0 md:gap-10 md:px-[50px] md:py-5'>
      <div className='flex justify-between items-center'>
        <p className='font-bold w-[95px] text-wrap'>Showing {products.length} Results</p>
        <div className='relative flex-1 flex justify-end items-center'>
          <img
            src={filterIcon}
            alt="filter-icon"
            className='w-[48px] h-[48px] md:hidden cursor-pointer'
            onClick={toggleDropdown}
          />
          <div className={`absolute top-0 right-0 flex-col md:flex-row lg:gap-[100px] bg-[#F3F2E8] md:bg-transparent shadow md:shadow-none rounded-[24px] md:rounded p-[20px] md:p-0 w-[200px] md:w-auto gap-[20px] z-10 ${dropdownOpen ? 'flex' : 'hidden md:flex'}`}>
            <div className='flex items-center lg:gap-2 flex-col md:flex-row'>
              <p className='font-bold text-[18px] mr-1 hidden md:flex'>Sort By :</p>
              <div className="flex gap-2 items-center flex-wrap flex-col md:flex-row w-full md:w-auto">
                {filters.map((filter, index) => (
                  <div
                    key={index}
                    className={`h-[40px] w-full md:w-auto rounded-full items-center justify-center cursor-pointer transition-all duration-500 font-semibold border-[2px] p-2 lg:p-4 flex gap-2 ${filter.clicked ? 'bg-[#121211] text-[#F3F2E8] border-transparent' : 'bg-transparent text-[#121211] border-[#121211]'}`}
                    onClick={() => handleFilterClick(filter.name)}
                  >
                    <img src={filter.icon} alt={`${filter.name} icon`} className={`w-6 h-6 ${filter.clicked ? "filter invert" : ""}`} />
                    {filter.name}
                  </div>
                ))}
              </div>
            </div>
            <div
              className='w-auto h-[40px] rounded-full flex items-center justify-center cursor-pointer md:bg-transparent md:text-[#121211] border-[#121211] border-[2px] p-4 font-semibold md:ml-2 bg-[#121211] text-[#F3F2E8]'
              onClick={() => { resetFilters(); toggleDropdown(); }}
            >
              Reset Filters
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between my-10 gap-[50px]'>
        <div className='h-[60px] md:h-auto relative'>
          <SideNav />
        </div>
        <div className='flex flex-1 flex-wrap justify-between gap-[10px] gap-y-[30px] lg:gap-[30px] flex-col md:flex-row'>
          {products.map((product, index) => (
            <Link key={index} to={`/products/${product.id}`} className='w-full md:w-[250px] h-[350px] mb-[100px]'>
              <div className="w-full md:w-[250px] h-[350px] rounded-[12px] overflow-hidden">
                <img src={`https://api.timbu.cloud/images/${product.image}`} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-[#121211] font-semibold text-[20px] mt-2">{product.name}</p>
              <p className="font-semibold text-[#872009] text-[16px]">₦ {product.price}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`h-10 w-10 flex items-center justify-center mx-1 cursor-pointer ${currentPage === index + 1 ? 'bg-[#121211] text-[#F3F2E8]' : 'bg-gray-200 text-[#121211]'}`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
