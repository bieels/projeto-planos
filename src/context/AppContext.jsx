import { useState, createContext, useEffect } from "react";


export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState();

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
        isMobile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
