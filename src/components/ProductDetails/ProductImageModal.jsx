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
        if (event.key === 'Escape') {
            onClose();
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden max-w-[90%] max-h-[90%]">
                <div className="">
                    <button
                        className="absolute z-20 top-0 right-0 m-3 p-4 rounded-full bg-white bg-opacity-50 text-white hover:bg-gray-900 focus:outline-none"
                        onClick={onClose}
                    >
                        <img src={closeIcon} alt="Close" className="w-6 h-6" />
                    </button>
                    <div className="relative">
                        <button
                            className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-10 h-full bg-black bg-opacity-50 text-white hover:bg-gray-900 focus:outline-none"
                            onClick={handlePrev}
                        >
                            <img src={arrow} alt="Previous" className="w-6 h-6 rotate-180" />
                        </button>
                        <img
                            src={`https://api.timbu.cloud/images/${images[currentIndex].url}`}
                            alt={images[currentIndex].alt}
                            className="w-full h-auto"
                        />
                        <button
                            className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-10 h-full bg-black bg-opacity-50 text-white hover:bg-gray-900 focus:outline-none"
                            onClick={handleNext}
                        >
                            <img src={arrow} alt="Next" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductImageModal;
