import React from "react";
import { imageData } from "../../data/dummy";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carousel.css";
import Button from "../button/Button";

const CarouselMotion = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20} // Adjust this value for spacing between slides on smaller screens
        slidesPerView={1} // Set the number of slides per view for small screens
        grabCursor={true}
        breakpoints={{
          // Responsive breakpoints for larger screens
          768: {
            slidesPerView: 1, // Set the number of slides per view for screens >= 768px wide
            spaceBetween: 40, // Adjust this value for spacing between slides on larger screens
          },
          1024: {
            slidesPerView: 1, // Set the number of slides per view for screens >= 1024px wide
            spaceBetween: 60, // Adjust this value for spacing between slides on even larger screens
          },
        }}>
        {imageData.map((item, index) => (
          <SwiperSlide className='item' key={index}>
            <img src={item.img} alt='' className='h-auto lg:w-10/12 xl:w-1/2' />
            <div className='image-overlay'>
              <h1 className='text-white xl:text-3xl text-base'>{item.title}</h1>
              <p className='text-white py-2 lg:py-5'>{item.info}</p>
              <Button
                text='View Website'
                className='bg-underline-bg p-2 px-10 rounded-md text-xm'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMotion;
