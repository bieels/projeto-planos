import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState();
  const [isActive, setIsActive] = useState(false);
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [modalContent, setModalContent] = useState(null);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setIsActive(true);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setIsActive(false);
  };

  const toggleTheme = () => {
    if (isActive) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [selectedTheme]);

  useEffect(() => {
    if (scroll < 200) {
      window.addEventListener("scroll", () => setScroll(window.scrollY));
    } else {
      return;
    }
  }, [scroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1366) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        selectedPlan,
        setSelectedPlan,
        scroll,
        setScroll,
        isMobile,
        isActive,
        setIsActive,
        toggleTheme,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
