import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [currentColor, setCurrentColor] = useState("/");
  const [currentIndex, setCurrentIndex] = useState(0);

  // MenuBar
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Navbar Link Colors
  const handleItemClick = (item) => {
      setCurrentColor(item);
      setMenuOpen(false);
  };

  // ImageData
  const imageData = [
    { img: "../images/code&t.png" },
    { img: "../images/prospermetrics.png" },
  ];

  // Loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2250);
  }, []);

  // prevClick();
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  // nextClick();
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

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
        menuOpen,
        setMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
