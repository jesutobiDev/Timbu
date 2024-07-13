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
            <div className=" rounded-lg overflow-hidden w-screen h-screen p-[50px] justify-between flex flex-col items-center bg-[#F3F2E8]">
                <button
                    className="cursor-pointer border-[2px] py-[12px] px-[12px] rounded-full w-fit border-[#121211] focus:outline-none self-end"
                    onClick={onClose}
                >
                    <img src={closeIcon} alt="Close" className="w-6 h-6 invert filter" />
                </button>
                <div className="md:w-[700px] md:h-[500px]">
                    <img
                        src={`https://api.timbu.cloud/images/${images[currentIndex].url}`}
                        alt={images[currentIndex].alt}
                        className="w-full h-full"
                    />
                </div>
                <div className='flex gap-[20px] items-center self-end'>
                    <button className='py-[12px] px-[18px] border-[2px] border-[#121211] rounded-full text-white cursor-pointer focus:outline-none' onClick={handlePrev}>
                        <img src={arrow} alt='previous' className='rotate-180 w-4 h-4' />
                    </button>
                    <button className='py-[12px] px-[18px] border-[2px] border-[#121211] rounded-full text-white cursor-pointer focus:outline-none' onClick={handleNext}>
                        <img src={arrow} alt='next' className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductImageModal;
