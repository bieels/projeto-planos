import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Sun from "@mui/icons-material/LightMode";
import Moon from "@mui/icons-material/Brightness3";
import "./styles.css"; 

export default function BotaoTopo() {
  const { toggleTheme, isActive } = useContext(AppContext);
  const { scroll } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };


  return (
    <>
      
          <div className="floating-btn">
            <button className={scroll > 100 ? "dark-mode-button" : "dark-mode-button hiddenbtn"} onClick={toggleTheme}>
        {isActive ? (
          <Sun sx={{ color: "var(--fonte-branca)" }} className="icon" />
        ) : (
          <Moon sx={{ color: "var(--fonte-branca)" }} className="icon" />
        )}
      </button>
        <button className={scroll > 100 ?  "back-to-top-button" : "back-to-top-button hiddenbtn"} onClick={scrollToTop}>
          <ExpandLessIcon  className="icon"/>
        </button> 
        </div>
      
    </>
  );
}