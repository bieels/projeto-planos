import { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("");

  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        selectedPlan,
        setSelectedPlan
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
