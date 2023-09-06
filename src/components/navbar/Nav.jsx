import React, { useState } from "react";
import LogoImage from "../../images/Logo/logo.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { HashLink } from "react-router-hash-link";
import Hamburger from "../hamburger/Hamburger";

const NavItem = ({ title, active, onItemClick }) => {
    return (
        <li
            className={`cursor-pointer relative transition-colors list-none ${active ? "text-white" : "text-[#B5B5B5]"
                }`}
        >
            <HashLink smooth to={`#${title}`} onClick={() => onItemClick(title)}>
                <span className="relative inline-block">
                    {title}
                    <span
                        className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 rounded-full h-1 bg-underline-bg transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"
                            }`}
                    ></span>
                </span>
            </HashLink>
            {active && (
                <div className="absolute inset-0 shadow-md blur-md bg-white opacity-10 transition-opacity duration-300"></div>
            )}
        </li>
    );
};
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(true)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    // importing currentColor
    const { currentColor, handleItemClick, } = useStateContext();

    return (
        // try to add container with mx-auto 
        <nav className="p-10 px-10 relative z-1 bg-main-bg">
            <div className="flex items-center">
                <HashLink to="/" className="flex items-center gap-2">
                    <img src={LogoImage} alt="" className="w-full" />
                    <h1 className="text-white text-4xl hidden lg:block">ThinkFrim</h1>
                </HashLink>
                <div className="hidden lg:flex gap-5 md:pl-28">
                    <NavItem
                        title="About"
                        active={currentColor === "About"}
                        onItemClick={handleItemClick}
                    />
                    <NavItem
                        title="Service"
                        active={currentColor === "Service"}
                        onItemClick={handleItemClick}
                    />
                    <NavItem
                        title="Projects"
                        active={currentColor === "Projects"}
                        onItemClick={handleItemClick}
                    />
                    <NavItem
                        title="Contact"
                        active={currentColor === "Contact"}
                        onItemClick={handleItemClick}
                    />
                </div>
            </div>
        </nav>
        // <nav className="flex flex-col md:flex-row items-center">

        //     {/* Responsive bar */}
        //     <div className="flex items-center justify-between p-2 px-5 bg-[#20222f] shadow-xl  w-full md:w-0 md:shadow-none md:z-0 md:p-0 md:px-0 md:bg-transparent rounded-full">
        //         <HashLink to="/" className="flex items-center gap-2">
        //             <img
        //                 src={LogoImage}
        //                 className="h-auto w-10 md:w-full md:h-full"
        //                 alt=""
        //             />
        //             <h1 className="text-white md:text-2xl hidden md:block">ThinkFrim</h1>
        //         </HashLink>

        //         {/* Hamburger Menu */}
        //         <div className="block md:hidden">
        //             <button onClick={toggleMenu}>
        //                 <Hamburger />
        //             </button>
        //         </div>
        //     </div>

        //     {/* NavItem */}
        //     <div className="">
        //         <NavItem
        //             title="About"
        //             active={currentColor === "About"}
        //             onItemClick={handleItemClick}
        //         />
        //         <NavItem
        //             title="Service"
        //             active={currentColor === "Service"}
        //             onItemClick={handleItemClick}
        //         />
        //         <NavItem
        //             title="Projects"
        //             active={currentColor === "Projects"}
        //             onItemClick={handleItemClick}
        //         />
        //         <NavItem
        //             title="Contact"
        //             active={currentColor === "Contact"}
        //             onItemClick={handleItemClick}
        //         />
        //     </div>
        // </nav>

    );
};

export default Nav;
