import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/images/chowmein.png',
        '/images/burger.png',
        '/images/momos.png',
        '/images/bhel.png',
        '/images/patties.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (

        <div className="relative overflow-hidden">

            <div className="flex transition-transform duration-500 w-[80vw] sm:w-[40vw]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img width={600} height={600} src={ image} alt={`Slide ${index + 1}`} className="]" />
                    </div>
                ))}
            </div>

            <div className=" flex justify-center items-center">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 mx-1 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>

    );
};

export default ImageSlider;
