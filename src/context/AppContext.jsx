import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

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
