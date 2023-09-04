/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import { Button } from "../components";

import laptop from "../images/Laptop.svg";
import backgroundImg from "../images/Angularcolor.png";
import ServiceImg from "../images/Service.svg";
import aboutImg from "../images/aboutus.svg";
import video from "../images/video/video.mp4";
import mail from "../images/icons/contact.svg";

import { serviceData, socialIcons } from "../data/dummy.js";

import CarouselMotion from "../components/carouselMotion/CarouselMotion";
import "./Home.css";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";

const Home = ({ text }) => {
  const isSmallScreen = useMediaQuery({ minWidth: 1024 });

  const mainText = isSmallScreen ? (
    <>
      Transform your online image with, <br className="lg:hidden" /> a professional website.
    </>
  ) : (
    <>
      Elevating Dreams, <br className="lg:hidden" /> Crafting Digital Realities
    </>
  );

  const subText = isSmallScreen ? (
    <>
      Get ahead of the competition with, <br className="" /> a custom built website
    </>
  ) : (
    <>
      ThinkFrim Your Gateway To <br /> Digital Future
    </>
  );

  return (
    <>
      <div className="md:px-16 pt-5 pb-5 bg-main-bg h-fit">
        <div className="md:flex-row lg:justify-normal flex flex-col justify-center items-center gap-5">
          <div className="relative">
            <h1 className="md:hidden relative text-[#ADC3FF] z-10 ">ThinkFrim</h1>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-20 inset-0 bg-[#ADC3FF] blur-md opacity-20"></div>
          </div>


          <div className="lg:text-left text-center text-white">
            <h1
              className={`"md:leading-relaxed md:text-4xl text-[2rem] mb-5`}
            >
              {mainText}
            </h1>
            <h2
              className={`"md:leading-relaxed md:text-2xl text-[1rem]`}
            >
              {subText}
            </h2>
          </div>
          <div>
            <img src={laptop} alt="" className="w-full hidden lg:block" />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between pt-20">
          <div className="lg:px-0 px-5 lg:flex-row  max-md:container flex flex-col gap-5">
            <Button
              text="Get in touch"
              icon={mail}
              className="p-5 flex justify-center  bg-underline-bg gap-2 rounded-lg"
            />
            <Button
              text="Discover"
              className="p-5 text-white border-2 border-[#F9BC60] rounded-lg"
            />
          </div>
          <div className="lg:pb-0 flex gap-5 items-center justify-center pb-10">
            <h1 className="text-white hidden lg:block">Follow us</h1>
            <div className="lg:gap-5 text-xl flex gap-16 text-white translate-x-[20%]">
              {socialIcons.map((item, index) => (
                <div className="text-white" key={index}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* service */}
      <div className="hidden flex justify-between relative bg-secondary-bg p-24 pt-24 h-screen" id="Service">
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
              className={`flex gap-10 justify-between items-center mt-16 py-7 px-5 w-full w-[40vw] bg-[#21242C] rounded-lg cursor-pointer`}
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
      <div
        className="hidden relative h-screen bg-main-bg p-24 pt-24 "
        id="About"
      >
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
                quia dolor sit amet, Neque porro elit NeDque porro Lorem ipsum{" "}
                <br />
                <br />
                Neque porro Neque porro Neque porro quisquam est qui do lorem
                ipsum quia dolor sit <br className="leading-relaxed" />
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
      <div className="hidden h-screen bg-secondary-bg p-24 pt-24" id="Projects">
        <div>
          <div>
            <h1 className="text-5xl text-white pb-5">Projects</h1>
            <h2 className="text-[#BEBEBE] text-xl">
              showcase of our latest projects
            </h2>
          </div>
          <CarouselMotion />
        </div>
      </div>

      {/* Contact */}
      <div className="hidden video-background h-screen" id="Contact">
        <video
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="video"
        />
        <div className="flex items-center justify-between mt-40 mx-24">
          <div>
            <h1 className="text-white text-6xl leading-relaxed">
              Do You Have A Project <br /> We Would Love <br /> To Help ?
            </h1>
          </div>
          <div className="content">
            <div className="">
              <div className="max-w-xl bg-black p-10 rounded-shadow-lg">
                <div className="flex justify-between space-x-4">
                  <button className="border-2 text-white border-white px-2 py-2">
                    UI/UX
                  </button>
                  <button className="border-2 text-white border-white px-2 py-2">
                    Mobile Dev
                  </button>
                  <button className="border-2 text-white border-white px-2 py-2">
                    Web Dev
                  </button>
                  <button className="border-2 text-white border-white px-2 py-2">
                    SaaS Projects
                  </button>
                </div>

                <form className="mt-6">
                  <div className="mb-4">
                    <input
                      className="border-b-2 bg-transparent border-[#BEBEBE] w-full py-2 px-3 text-white leading-tight focus:outline-none"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      className="border-b-2 bg-transparent border-[#BEBEBE] w-full py-2 px-3 text-white leading-tight focus:outline-none"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="mb-4">
                    <div className="relative">
                      <textarea
                        className="border-b-2 bg-transparent border-[#BEBEBE] w-full py-2 px-3 text-white leading-tight focus:outline-none resize-none"
                        rows="4"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input type="file" className="input-file" />
                  </div>

                  <button
                    className="border-2 border-[#F9BC60] bg-transparent px-4 py-2 text-white rounded-xl"
                    type="submit"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 mx-24 text-xl">
          <a href="mailto:thinkfrim@gmail.com" className="text-white">
            thinkfrim@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="relative pb-10 hidden">
<h1 className="text-[#ADC3FF] relative">ThinkFrim</h1>
<div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-3 inset-0  blur-bg-[#ADC3FF] opacity-20"></div>
</div> */
}
