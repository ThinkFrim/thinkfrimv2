import React from "react";
import LogoImage from "../../images/Logo/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-main-bg pt-10 px-5 pb-10'>
      <div className='flex flex-col justify-between items-center gap-10 md:flex-row'>
        <div>
          <div className='flex items-center gap-3'>
            <img src={LogoImage} alt='' className='w-[4rem]' />
            <h1 className='text-white text-xl'>ThinkFrim</h1>
          </div>
          <h1 className="text-white pt-5">© Copyright ThinkFrim. All Rights Reserved</h1>
        </div>
        <div className='flex gap-14 mx-10'>
          <div className='text-white'>
            <h1 className='pb-5'>Contact</h1>
            <a href=''>thinkfrim@contact.com</a>
          </div>
          <div className='text-white flex flex-col'>
            <h1 className='pb-5'>Socials</h1>
            <a href=''>discord</a>
            <a href=''>Twitter</a>
            <a href=''>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
