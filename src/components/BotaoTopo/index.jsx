import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./styles.css"; 

export default function BotaoTopo() {
  const { scroll } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };


  return (
    <>
      { scroll > 100 && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          Voltar ao Topo
        </button>
      )}
    </>
  );
}