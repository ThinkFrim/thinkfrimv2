/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Footer, Nav, Form } from "../components";

import laptop from "../images/Laptop.svg";
import backgroundImg from "../images/Angularcolor.png";
import ServiceImg from "../images/Service.svg";
import aboutImg from "../images/aboutus.svg";
import video from "../images/video/video.mp4";
import mail from "../images/icons/contact.svg";

import { imageData, serviceData, socialIcons } from "../data/dummy.js";

import "./Home.css";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isSmallScreen = useMediaQuery({ minWidth: 1024 });

  const mainText = isSmallScreen ? (
    <>
      Transform your online image with, <br className='hidden lg:block' /> a
      professional website.
    </>
  ) : (
    <>
      Elevating Dreams, <br className='' /> Crafting Digital Realities
    </>
  );

  const subText = isSmallScreen ? (
    <>
      Get ahead of the competition with, <br className='hidden lg:block' /> a
      custom built website
    </>
  ) : (
    <>
      ThinkFrim Your Gateway To <br /> Digital Future
    </>
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=''>
      <div
        className='md:px-16 bg-main-bg min-h-screen pb-5 overflow-hidden'
        id='home'>
        <Nav />
        <div className='absolute bottom-0 inset-0 -z-1'>
          <img
            src={backgroundImg}
            alt=''
            className='hidden lg:block object-cover w-full h-full'
          />
        </div>
        <div
          className='container mx-auto pt-16 h-full xl:pt-24'
          data-aos='fade-right'>
          <div
            className='lg:flex-row lg:justify-normal flex flex-col items-center gap-5'
            data-aos='fade-up'>
            <div className='relative'>
              <h1 className='md:hidden relative text-[#ADC3FF] z-10'>
                ThinkFrim
              </h1>
              <div className='absolute left-1/2 transform -translate-x-1/2 w-20 inset-0 bg-[#ADC3FF] blur-md opacity-20'></div>
            </div>
            <div className='text-white text-center lg:text-left'>
              <h1 className='lg:text-3xl text-2xl py-5'>{mainText}</h1>
              <h3 className='lg:text-2xl'>{subText}</h3>
            </div>
            <div>
              <img
                src={laptop}
                alt=''
                className='hidden lg:block w-[35vw]'
                loading='lazy'
              />
            </div>
          </div>
          <div className='flex flex-col-reverse lg:flex-row items-center lg:justify-between'>
            <div className='lg:px-0 px-5 lg:flex-row  flex flex-col gap-5'>
              <HashLink smooth to='#Contact' className='mx-auto'>
                <Button
                  text='Get in touch'
                  icon={mail}
                  className='p-5 mx-auto w-[80vw] lg:w-full flex justify-center  bg-underline-bg gap-2 rounded-lg'
                />
              </HashLink>
              <HashLink smooth to='#Service' className='mx-auto'>
                <Button
                  text='Discover'
                  className='p-5 mx-auto w-[80vw] lg:w-full text-white border-2 border-[#F9BC60] rounded-lg'
                />
              </HashLink>
            </div>
            <div className='lg:pb-0 flex gap-5 items-center justify-center pb-10'>
              <h1 className='text-white hidden lg:block'>Follow us</h1>
              <div className='lg:gap-5 text-xl flex gap-16 text-white translate-x-[20%]'>
                {socialIcons.map((item, index) => (
                  <div className='text-white' key={index}>
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service */}

      <div
        className='relative bg-secondary-bg min-h-screen overflow-hidden'
        id='Service'>
        <div className='absolute bottom-0 inset-0 -z-1'>
          <img
            src={backgroundImg}
            alt=''
            className='hidden lg:block object-cover w-full h-full'
          />
        </div>

        <div className='lg:p-16 xl:pt-24 lg:flex-row flex flex-col justify-between'>
          <div
            className='pt-10 text-center lg:text-left z-10'
            data-aos='fade-left'>
            <h1 className='pb-5 text-3xl text-white xl:text-5xl '>
              Services We Provide
            </h1>
            <p className='text-lg text-[#BEBEBE]'>
              We specialize in delivering a diverse array of{" "}
              <br className='hidden md:block' /> cutting-edge services that
              cater to your digital <br className='hidden md:block' /> needs.
              Our expertise extends across a spectrum of{" "}
              <br className='hidden md:block' /> solutions, including
            </p>
            <img
              src={ServiceImg}
              alt=''
              className='hidden lg:block'
              loading='lazy'
            />
          </div>

          <div className='z-20 pb-10 lg:pb-0'>
            {serviceData.map((item, index) => (
              <div
                className='mt-6 p-5 mx-2 lg:w-[40vw] rounded-xl bg-[#0F0E17] flex justify-between items-center'
                key={index}
                data-aos='fade-down'>
                <div>
                  <h1 className='text-white text-lg'>{item.title}</h1>
                  <h2 className='text-[#BEBEBE]'>{item.description}</h2>
                </div>
                <div className='p-5 bg-[#191B1F] rounded-lg'>
                  <img
                    src={item.icon}
                    alt=''
                    className='object-contain w-full h-full aspect-square'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className='relative bg-main-bg min-h-screen' id='About'>
        <div className='pt-16 flex flex-col lg:flex-row items-center justify-between lg:mx-24'>
          <div className='absolute bottom-0 inset-0 -z-1'>
            <img
              src={backgroundImg}
              alt=''
              className='hidden lg:block object-cover w-full h-full'
            />
          </div>
          <div className='hidden lg:block'>
            <img src={aboutImg} alt='' loading='lazy' data-aos='fade-down' />
          </div>
          <div className='text-center lg:text-left z-10'>
            <h1 className='pb-3 text-[#F9BC60] text-xl'>About us</h1>
            <h1 className='text-white text-3xl leading-loose lg:text-5xl'>
              We Bring <span className='text-[#F9bc60]'>Creative</span> <br />{" "}
              Ideas To Life
            </h1>
            <div
              className='my-5 w-[25%] mx-auto lg: lg:mx-0 border-2 border-white overflow-hidden'
              data-aos='fade-left'></div>
            <h1 className='pb-3 text-[#F9BC60] text-xl'>We Love Creating</h1>
            <p
              className='text-white px-5 md:px-0 lg:text-xl leading-loose'
              data-aos='fade-down'>
              At Thinkfrim, we specialize in web development and design.
              <br className='hidden md:block' />
              Our passion drives us to create exceptional online experiences.{" "}
              <br className='hidden md:block' />
              We're here to bring your digital ideas to life
            </p>
          </div>
        </div>
      </div>

      {/* Our Projects */}
      <div className='min-h-screen bg-secondary-bg p-16' id='Projects'>
        <div>
          <div className='text-center lg:text-left pb-5'>
            <h1 className='text-5xl text-white pb-5'>Projects</h1>
            <div className='flex flex-col items-center justify-between md:flex-row'>
              <h2 className='text-[#BEBEBE] text-xl'>
                showcase of our latest projects
              </h2>
              <button className="p-2 bg-underline-bg rounded mt-5">view all projects</button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-20 md:flex-row mt-20'>
            {imageData.map((items, index) => (
              <div
                className='pt-5 flex flex-col justify-center items-center text-white md:items-start'
                key={index}>
                <img
                  src={items.img}
                  alt=''
                  className='min-w-[25rem] sm:min-w-full rounded-lg cursor-pointer mx-auto overflow-hidden'
                  data-aos='fade-down'
                />
                <div className='mt-5' data-aos='fade-right'>
                  <h1 className='my-2'>{items.title}</h1>
                  <p className=''>{items.info}</p>
                  <button className='bg-underline-bg p-2 px-5 rounded-md mt-2 text-black'>
                    <a href="https://hpsvalet.netlify.app/">view project</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className='video-background min-h-screen pb-24' id='Contact'>
        <video
          src={video}
          type='video/mp4'
          autoPlay
          loop
          muted
          className='video'
        />

        <div className='pt-10 text-center px-2 flex flex-col items-center lg:flex-row md:justify-between md:text-left md:mx-24 video-background'>
          <h1 className='pb-5 text-white text-2xl xl:text-4xl'>
            Have a Project ? <br className='hidden lg:block' /> We would love to
            help
          </h1>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
