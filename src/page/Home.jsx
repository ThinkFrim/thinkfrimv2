import React from "react";

import { Button, Carousel, CarouselComponent, Nav } from "../components";

import laptop from "../images/Laptop.svg";
import backgroundImg from "../images/Angularcolor.png";
import ServiceImg from "../images/Service.svg";
import aboutImg from "../images/aboutus.svg";
import video from '../images/video/video.mp4';

import { contactData, imageData, serviceData, socialIcons } from "../data/dummy.js";

import CarouselMotion from "../components/carouselMotion/CarouselMotion";
import './Home.css'

const Home = () => {
  return (
    // Parent Holder
    <div className="">
      {/* Hero Section */}
      <div className="bg-main-bg h-screen p-24 pt-10">
        <Nav />
        <div className="flex items-center gap-24">
          <div>
            <h1 className="text-white text-5xl leading-normal">
              Transform your online image,
              <br className="" />
              with a professional website.
            </h1>
            <h1 className="text-white text-3xl leading-normal">
              Get ahead of the competition <br className="" /> with a
              custom-built website
            </h1>
          </div>
          <img src={laptop} alt="" className="w-full max-w-[45%]" />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button
              text="Get In Touch"
              className="text-black bg-underline-bg"
            />
            <button className="border-[#F9BC60] border-2 p-5 px-10 rounded-lg text-xl text-white font-medium">
              Discover
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <h1 className="text-white">follow us</h1>
            {socialIcons.map((items, index) => (
              <div className="text-white text-xl" key={index}>
                {items.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* service */}
      <div
        className="flex justify-between relative bg-secondary-bg p-24 pt-24 h-screen"
        id="Service"
      >
        <div className="absolute bottom-24 inset-0 -z-1">
          <img
            src={backgroundImg}
            alt=""
            className="object-cover w-full h-full z-10"
          />
        </div>
        <div className="z-10">
          <h1 className="text-white text-5xl pb-7">Services We Provide</h1>
          <p className="text-[#BEBEBE] text-xl">
            We specialize in delivering a diverse array of <br className="" />{" "}
            cutting-edge services that cater to your digital <br className="" />{" "}
            needs. Our expertise extends across a spectrum of{" "}
            <br className="" /> solutions, including
          </p>
          <img src={ServiceImg} alt="" className="max-w-full pt-10" />
        </div>
        <div className="z-20">
          {serviceData.map((item, index) => (
            <div
              className={`flex gap-10 justify-between items-center mt-16 py-7 px-5 w-full md:w-[40vw] bg-[#21242C] rounded-lg cursor-pointer`}
              key={index}
            >
              <div>
                <h1 className="text-white text-2xl">{item.title}</h1>
                <h3 className="pt-2 text-lg text-[#BEBEBE]">
                  {item.description}
                </h3>
              </div>
              <div className="bg-[#191B1F] p-5 rounded-xl flex items-center justify-center">
                <img src={item.icon} alt="" className="w-[75%] px-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="relative h-screen bg-main-bg p-24 pt-24 " id="About">
        <div className="absolute bottom-24 inset-0 -z-1">
          <img
            src={backgroundImg}
            alt=""
            className="object-cover w-full h-full z-10"
          />
        </div>
        <div className="flex justify-between z-10">
          <div>
            <img src={aboutImg} alt="" />
          </div>

          <div className="z-20">
            <h1 className="text-[#F9BC60]">About us</h1>
            <h1 className="text-white text-4xl leading-relaxed mt-3">
              We Bring <span className=" text-[#F9BC60]">Creative</span> Ideas{" "}
              <br /> To Life
            </h1>
            <div className="border-b-2 border-white border-x-2 w-16 mt-3" />
            <h1 className="text-[#F9BC60] my-5">We Love Creating</h1>
            <div>
              <p className="text-white leading-relaxed space-x-2 text-xl">
                Lorem ipsumNeque porro quisquam est qui do lorem ipsum <br />
                quia dolor sit amet, Neque porro elit NeDque porro Lorem ipsum <br />
                <br />
                Neque porro Neque porro Neque porro quisquam est qui do lorem ipsum quia dolor sit <br className="leading-relaxed" />
                amet, Lorem ipsum Neque quis ipsum{" "}
              </p>
            </div>
            <button className="border-[#F9BC60] border-2 p-2 px-5 mt-10 text-white font-medium">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Our Projects */}
      <div className="h-screen bg-secondary-bg p-24 pt-24" id="Projects">
        <div>
          <div>
            <h1 className="text-5xl text-white pb-5">Projects</h1>
            <h2 className="text-[#BEBEBE] text-xl">showcase of our latest projects</h2>
          </div>
          <CarouselMotion />
        </div>
      </div>

      {/* Contact */}
      <div className="video-background h-screen" id="Contact">
        <video src={video} type='video/mp4' autoPlay loop muted className="video" />
        <div className="flex items-center justify-between mt-24 mx-24">
          <div>
            <h1 className="text-white text-6xl">Do You Have A Project ?</h1>
          </div>
          <div className="content">
            <div className="bg-black p-24 w-[40vw] h-[80vh]">
              <div>
                <div className="flex flex-wrap gap-5 item-center">
                  {
                    contactData.map((item, index) => (
                      <div className="flex" key={index}>
                        <button className="border-2 p-3 rounded-lg text-sm border-white text-white">{item.option}</button>
                      </div>
                    ))
                  }
                </div>
              </div>
              {/* Form */}
              <form className="flex-col">
              <label className="text-white">Your Name</label>
              <input type="text" className="bg-transparent border-b-2 border-b-[#]" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
