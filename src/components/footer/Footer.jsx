import React from "react";
import LogoImage from "../../images/Logo/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-main-bg py-10 px-10">
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src={LogoImage} alt="" className="w-[10vw] lg:w-[4vw]" />
          <h1 className="text-white text-xl">ThinkFrim</h1>
        </div>
        <div className="flex gap-16">
          <div>
            <h1 className="text-white pb-3">Contact</h1>
            <a href="@mailto:thinkfrim@gmail.com" className="text-white mt-5">
              contact@thinkfrim
            </a>
          </div>
          <div className="text-white flex flex-col">
            <h1 className="text-white pb-3">social</h1>
            <a href="">Discord</a>
            <a href="">Instagram</a>
            <a href="">Github</a>
          </div>
        </div>
      </div>
      <p className="text-white">
        &copy; {currentYear} ThinkFrim. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
