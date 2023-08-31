import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { imageData } from '../../data/dummy'
import  Button  from '../button/Button'
import './carousel.css'

const CarouselMotion = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    // check the scroll and offset width of the carousel div
    useEffect(() => {
        console.log(carousel.current.scroll);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div>
            <motion.div ref={carousel} className='carousel' Too whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {imageData.map((item, index) => (
                        <motion.div className='item' key={index}>
                            <img src={item.img} alt="" />
                            <div className='image-overlay'>
                                <h2 className='text-[#6D95FC] text-xl'>{item.title}</h2>
                                <p className='mb-5'>{item.info}</p>
                                <button type='button' className='bg-[#F9BC60] p-3 px-5 rounded-sm text-sm text-black font-medium'>Visit Webiste</button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CarouselMotion