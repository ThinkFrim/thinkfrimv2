import { click } from "@testing-library/user-event/dist/click";
import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [activeMenu, setActiveMenu] = useState("");
    const [currentColor, setCurrentColor] = useState("/")
    const [currentIndex, setCurrentIndex] = useState(0)

    // checking length



    // ImageData
    const imageData = [
        { img: '../images/code&t.png' },
        { img: '../images/prospermetrics.png' },
    ];


    // Loading 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2250);
    }, []);


    // Navbar Link Colors
    const handleItemClick = (item) => {
        setCurrentColor(item);
    };


    // Carousel


    // prevClick();
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? imageData.length - 1 : prevIndex - 1)
    }

    // nextClick();
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => prevIndex === imageData.length - 1 ? 0 : prevIndex + 1)
    }

    return (
        <StateContext.Provider
            value={{
                loading,
                setLoading,
                activeMenu,
                setActiveMenu,
                currentColor,
                setCurrentColor,
                handleItemClick,
                currentIndex,
                setCurrentIndex,
                handlePrevClick,
                handleNextClick,

            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

