import React from "react";
import LogoImage from "../../images/Logo/logo.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { HashLink } from "react-router-hash-link";

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
    // importing currentColor
    const { currentColor, handleItemClick } = useStateContext();

    return (
        <nav className="flex items-center">
            <HashLink to="/" className="flex items-center gap-2">
                <img src={LogoImage} alt="" />
                <h1 className="text-white text-4xl hidden md:block">ThinkFrim</h1>
            </HashLink>
            <div className="hidden md:flex gap-5 md:pl-28">
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
        </nav>
    );
};

export default Nav;
