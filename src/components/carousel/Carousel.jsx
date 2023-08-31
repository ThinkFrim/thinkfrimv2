import React from 'react'
import 'react-responsive-carousel'
import { imageData } from '../../data/dummy';
import { useState } from 'react';

const CarouselComponent = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div>
            <div className=''>
                {imageData.map((item, index) => {
                    return (
                        <div className={`${index === current ? 'slide active' : 'slide'} `} key={index}>
                            {index === current && (
                                <img src={item.img} alt='' className='image' />
                            )}
                        </div>
                    )
                })}
            </div>
            <div className='flex gap-5 justify-center mt-4'>
                <button onClick={nextSlide} className='px-4 py-2 bg-gray-300 rounded-r'>
                    Next
                </button>
                <button onClick={prevSlide} className='px-4 py-2 bg-gray-300 rounded-l'>
                    Previous
                </button>
            </div>
        </div>
    )
}

export default CarouselComponent;