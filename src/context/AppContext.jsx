import { useState, createContext, useEffect } from "react";


export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (scroll < 200) {
      window.addEventListener("scroll", () => setScroll(window.scrollY));
    } else {
      return;
    }
  }, [scroll]);


  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        selectedPlan,
        setSelectedPlan,
        scroll,
        setScroll
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
