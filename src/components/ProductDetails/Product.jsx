import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import AddToCartModal from '../Cart/AddToCartModal';
import Cart from "../../assets/icons/black-cart.svg";
import Arrow from "../../assets/icons/arrow-forward.svg";
import Footer from "../Footer";
import bars from "../../assets/icons/bars.svg";
import close from "../../assets/icons/close.svg";
import { CartContext } from '../Context/CartContext';
import { fetchProduct } from "../../services/fetchProduct";
import ProductImageModal from './ProductImageModal';
import { fetchProducts } from '../../services/fetchProducts';

const Product = ({ handleToggleNav, toggleNav }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [showAddToCartModal, setShowAddToCartModal] = useState(false);
    const [showProductImageModal, setShowProductImageModal] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const { addToCart, cart } = useContext(CartContext);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const itemsPerPage = 3; 

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productData = await fetchProduct(id);
                setProduct(productData);
                setSelectedColor(productData.colorVariants ? productData.colorVariants[0].color : '');
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProductDetails();
    }, [id]);

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

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({ id: product.id, quantity, selectedColor });
        setShowAddToCartModal(true);
        setTimeout(() => {
            setShowAddToCartModal(false);
        }, 1000);
    };

    const handleThumbnailClick = (index) => {
        setModalImageIndex(index);
        setShowProductImageModal(true);
    };

    const nextImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex === product.photos.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex === 0 ? product.photos.length - 1 : prevIndex - 1));
    };

    const numberOfCartItems = cart.length;


    return (
        <div>
            <div className="w-full h-auto relative md:p-0 md:flex md:gap-10 md:px-[50px] md:py-5 font-poppins md:items-center">
                <div className='w-full md:w-auto flex justify-between items-center h-20 md:h-16'>
                    <p className="text-[42px] font-semibold text-[#121211] ml-5 md:ml-0">Timbu</p>
                    <div className='flex gap-[20px] items-center'>
                        <Link to="/cart" className="relative md:hidden">
                            <img src={Cart} alt="cart" className={`${toggleNav ? "invert filter" : ""}`} />
                            {numberOfCartItems > 0 && (
                                <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-[#872009] rounded-full w-4 h-4 flex items-center justify-center text-[#F3F2E8] text-xs">
                                    {numberOfCartItems}
                                </div>
                            )}
                        </Link>
                        <img src={bars} alt="bars" className='h-[16px] w-[24px] opacity-50 md:hidden mr-5 invert filter cursor-pointer' onClick={handleToggleNav} />
                    </div>
                </div>
                <div className={`fixed top-0 right-0 bg-[#F3F2E8] md:bg-transparent md:items-center w-full h-full md:static md:w-auto md:flex md:justify-between md:flex-1 transition-transform duration-500 ease-in-out z-50 ${toggleNav ? 'transform translate-x-0' : 'transform translate-x-full md:transform-none'}`}>
                    <div className="flex justify-end p-5 md:hidden" onClick={handleToggleNav}>
                        <img src={close} alt="close" className='h-[36px] w-[36px] cursor-pointer invert filter' />
                    </div>
                    <ul className='flex flex-col md:flex-row gap-10 md:gap-5 items-center md:items-center p-10 md:p-0'>
                        <li className='transition-all duration-300 ease font-semibold md:font-normal text-[30px] md:text-base'>Collections</li>
                        <li className='transition-all duration-300 ease font-semibold md:font-normal text-[30px] md:text-base'>Clearances</li>
                        <li className='transition-all duration-300 ease font-semibold md:font-normal text-[30px] md:text-base'>About</li>
                    </ul>
                    <hr className='opacity-40 md:hidden' />
                    <div className="gap-[30px] items-center hidden md:flex p-10 md:p-0">
                        <Link to="/cart" className="relative">
                            <img src={Cart} alt="cart" className={`${toggleNav ? "invert filter" : ""}`} />
                            {numberOfCartItems > 0 && (
                                <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-[#872009] rounded-full w-4 h-4 flex items-center justify-center text-[#F3F2E8] text-xs">
                                    {numberOfCartItems}
                                </div>
                            )}
                        </Link>
                        <div className="text-[14px] font-semibold">EN</div>
                        <Link to="/" className="bg-[#F3F2E8] text-[#121211] px-4 py-2 rounded-full font-semibold text-[14px]">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className='my-10 flex flex-col lg:flex-row lg:gap-[100px] justify-between p-5 md:p-0 md:px-[50px] lg:py-5'>
                <div className='flex flex-col gap-[35px]'>
                    <Link to="/listings" className='flex gap-1 font-bold'>
                        <img src={Arrow} alt="arrow-back" className='rotate-180' /> Back to lists
                    </Link>
                    <p className='font-semibold text-[42px]'>{product.name}</p>
                    <p>{product.description}</p>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-[24px]">Qty :</h3>
                        <div className="flex items-center gap-2">
                            <button
                                className="border border-gray-400 p-2 rounded-full"
                                onClick={handleDecrease}
                            >
                                -
                            </button>
                            <span className="font-semibold text-[24px]">{quantity}</span>
                            <button
                                className="border border-gray-400 p-2 rounded-full"
                                onClick={handleIncrease}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div
                        className="bg-[#121211] cursor-pointer text-[#F3F2E8] px-4 py-2 rounded-full font-semibold text-[14px] mt-4 w-full flex justify-center md:w-fit gap-2"
                        onClick={handleAddToCart}
                    >
                        Add to Cart <span>₦ {product.current_price}</span>
                    </div>
                </div>
                <div className='md:mt-[50px] lg:mt-[30px] mt-[50px] lg:w-[75%]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='lg:w-[500px] lg:min-h-[450px] lg:h-auto  w-full h-[360px] rounded-[12px] object-cover overflow-hidden'>
                            <img src={`https://api.timbu.cloud/images/${product.photos[modalImageIndex].url}`} alt={product.name} className='w-full h-full object-cover cursor-pointer' onClick={() => setShowProductImageModal(true)} />
                        </div>

                        <div className='w-full h-auto flex justify-between gap-[20px] items-center'>
                            <div className=' p-2 flex gap-2 '>
                                {product.photos.slice(0, 3).map((photo, index) => (
                                    <img
                                        key={index}
                                        src={`https://api.timbu.cloud/images/${photo.url}`}
                                        alt={product.name}
                                        className={`h-[56px] w-[72px] object-cover rounded-[8px] cursor-pointer ${index !== modalImageIndex ? 'blur-overlay' : 'border-[2px] border-[#121211]'}`}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                            <div className='flex gap-[10px] items-center h-full'>
                                <button className='py-[12px] px-[18px] border-[2px] border-[#121211] rounded-full text-white cursor-pointer' onClick={prevImage}>
                                    <img src={Arrow} alt='previous' className='rotate-180 w-4 h-4' />
                                </button>
                                <button className='py-[12px] px-[18px] border-[2px] border-[#121211] rounded-full text-white cursor-pointer' onClick={nextImage}>
                                    <img src={Arrow} alt='next' className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-5 md:m-0 md:mx-[50px] md:my-10">
            <div className="flex-col md:flex-row flex justify-between text-[#121211] items-center gap-[30px]">
                <p className="text-[32px] font-semibold ">Other products you might like</p>
            </div>
            <div className="flex mt-[50px] justify-between flex-col md:flex-row gap-[20px] items-center">
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
            <Footer />
            {showAddToCartModal && (
                <AddToCartModal onClose={() => setShowAddToCartModal(false)} />
            )}
            {showProductImageModal && (
                <ProductImageModal
                    images={product.photos}
                    initialIndex={modalImageIndex}
                    onClose={() => setShowProductImageModal(false)}
                />
            )}
        </div>
    );
};

export default Product;


















