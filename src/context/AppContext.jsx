"use client";

import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext({});

export const NAVBAR_LINK = [
  {
    name: "Início",
    path: "#home",
    page: false,
  },
  {
    name: "Destaques",
    path: "#destaques",
    page: false,
  },
  {
    name: "Planos",
    path: "#plans",
    page: false,
  },
  {
    name: "Empresa",
    path: "#empresa",
    page: false,
  },
  {
    name: "Contato",
    path: "#contato",
    page: false,
  },
];

export const AppProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("selectedTheme");
      setSelectedTheme(savedTheme || 'light');
      if (savedTheme === "dark") {
        setDarkMode();
      } else {
        setLightMode();
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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

  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        selectedPlan,
        setSelectedPlan,
        scroll,
        setScroll,
        isActive,
        setIsActive,
        toggleTheme,
        modalContent,
        setModalContent,
        NAVBAR_LINK,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
