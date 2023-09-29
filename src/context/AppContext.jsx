import { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState('');
  

  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
