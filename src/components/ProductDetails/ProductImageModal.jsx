import React, { useState, useEffect } from 'react';
import closeIcon from '../../assets/icons/close.svg';
import arrow from '../../assets/icons/arrow-forward.svg';

const ProductImageModal = ({ images, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleKeyPress = (event) => {
        switch (event.key) {
            case 'Escape':
                onClose();
                break;
            case 'ArrowLeft':
                handlePrev();
                break;
            case 'ArrowRight':
                handleNext();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentIndex]);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden max-w-[90%] max-h-[90%]">

                <div className="relative">
                    <button
                        className="absolute right-[20px] md:right-[50px] top-[20px] cursor-pointer border-[2px] py-[12px] px-[12px] rounded-full border-[#121211] focus:outline-none"
                        onClick={onClose}
                    >
                        <img src={closeIcon} alt="Close" className="w-6 h-6 invert filter" />
                    </button>
                    <img
                        src={`https://api.timbu.cloud/images/${images[currentIndex].url}`}
                        alt={images[currentIndex].alt}
                        className="w-full h-auto"
                    />
                    <div className='flex gap-[20px] items-center lg:h-full absolute right-[20px] md:right-[50px] bottom-[20px] '>
                        <button className='py-[12px] px-[18px] border-[2px] border-[#121211] rounded-full text-white cursor-pointer focus:outline-none"' onClick={handlePrev}>
                            <img src={arrow} alt='previous' className='rotate-180 w-4 h-4' />
                        </button>
                        <button className='py-[12px] px-[18px] border-[2px] border-[#121211] rounded-full text-white cursor-pointer focus:outline-none"' onClick={handleNext}>
                            <img src={arrow} alt='next' className='w-4 h-4' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductImageModal;
