import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import LogoImage from "../../images/Logo/logo.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { HashLink } from "react-router-hash-link";
import { Sling as Hamburger, Sling } from "hamburger-react";

const NavItem = ({ title, active, onItemClick }) => {
  return (
    <li
      className={`cursor-pointer relative transition-colors list-none ${
        active ? "text-white" : "lg:text-[#B5B5B5] text-black"
      }`}>
      <HashLink smooth to={`#${title}`} onClick={() => onItemClick(title)}>
        <span className='relative inline-block py-5 lg:py-0'>
          {title}
          <span
            className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 lg:w-5 rounded-full h-1 bg-underline-bg transition-transform duration-300 ${
              active ? "scale-x-100" : "scale-x-0"
            }`}></span>
        </span>
      </HashLink>
      {active && (
        <div className='absolute inset-5 shadow-md blur-md bg-white opacity-10 transition-all duration-300'></div>
      )}
    </li>
  );
};

const Nav = () => {
  const { currentColor, handleItemClick, toggleMenu, menuOpen } =
    useStateContext();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <nav className={`lg:fixed container mx-auto p-5  relative z-50 }`}>
      {/* Mobile */}

      <div className='lg:hidden block'>
        <div
          className={`flex justify-between items-center  py-2 px-3 rounded-full  bg-[#46495b58] ${
            menuOpen
              ? "z-40 fixed left-0 right-0  flex justify-between items-center  bg-transparent"
              : ""
          }`}>
          <img
            src={LogoImage}
            alt=''
            className='w-[11.5vw] md:w-[7vw] sm:w-[8vw]'
          />
          <div className='w-auto'>
            <Sling
              direction='right'
              color={menuOpen ? "#000" : "#fff"}
              toggled={menuOpen}
              toggle={toggleMenu}
              size={24}
              onToggle={toggleMenu}
            />
          </div>
        </div>
        <div
          className={`${
            menuOpen
              ? " flex-col justify-center items-center bg-underline-bg"
              : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 z-20`}>
          <div className='flex flex-col justify-center items-center h-full'>
            <NavItem
              title='About'
              active={currentColor === "About"}
              onItemClick={() => handleItemClick("About")}
            />
            <NavItem
              title='Service'
              active={currentColor === "Service"}
              onItemClick={() => handleItemClick("Service")}
            />
            <NavItem
              title='Projects'
              active={currentColor === "Projects"}
              onItemClick={() => handleItemClick("Projects")}
            />
            <NavItem
              title='Contact'
              active={currentColor === "Contact"}
              onItemClick={() => handleItemClick("Contact")}
            />
          </div>
        </div>
      </div>

      {/* Desktop */}

      <div className='hidden lg:flex items-center z-10'>
        <HashLink to='/' className='flex items-center gap-2'>
          <img src={LogoImage} alt='' className='' />
          <h1 className='text-white text-4xl hidden lg:block'>ThinkFrim</h1>
        </HashLink>
        <div className='hidden lg:flex gap-5 md:pl-28'>
          <NavItem
            title='About'
            active={currentColor === "About"}
            onItemClick={handleItemClick}
          />
          <NavItem
            title='Service'
            active={currentColor === "Service"}
            onItemClick={handleItemClick}
          />
          <NavItem
            title='Projects'
            active={currentColor === "Projects"}
            onItemClick={handleItemClick}
          />
          <NavItem
            title='Contact'
            active={currentColor === "Contact"}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
