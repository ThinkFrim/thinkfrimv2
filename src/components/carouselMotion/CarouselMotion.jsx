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
      <Swiper spaceBetween={10} slidesPerView={1} grabCursor={true}>
        <div>
          {imageData.map((item, index) => (
            <SwiperSlide className="item" key={index}>
              <img src={item.img} alt="" className="object-cover" />
              <div className="image-overlay">
                <h1 className="text-white lg:text-5xl">{item.title}</h1>
                <p className="lg:text-2xl text-white py-5">{item.info}</p>
                <Button
                  text="View Website"
                  className="bg-underline-bg p-3 px-10 rounded-md"
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
