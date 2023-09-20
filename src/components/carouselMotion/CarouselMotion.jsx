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
        spaceBetween={220}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={{
          490: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}>
        <div>
          {imageData.map((item, index) => (
            <SwiperSlide className='item' key={index}>
              <img src={item.img} alt='' className='object-cover' />
              <div className='image-overlay'>
                <h1 className='text-white lg:text-5xl'>{item.title}</h1>
                <p className='lg:text-2xl text-white py-5'>{item.info}</p>
                <Button
                  text='View Website'
                  className='bg-underline-bg p-3 px-10 rounded-md'
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselMotion;
