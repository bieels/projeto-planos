import DarkMode from "../DarkMode";
import dwlogo from "/img/dwlogo2.png";
import "./styles.css";
import { useState } from "react";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <a className="logo" href="/">
            <img src={dwlogo} alt="" />
          </a>

          <ul className="nav-list">
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#destaques">Destaques</a>
            </li>
            <li>
              <a href="#empresa">Empresa</a>
            </li>
            <li>
              <a href="#planos">Planos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <div className="btn-end">
            <div className="cliente">
              <a href="#" className="btn">
                <span className="btn__circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#42ab1c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <span className="btn__white-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="icon-arrow-right"
                    viewBox="0 0 21 12"
                  >
                    <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                  </svg>
                </span>
                <span className="btn__text">Área do Cliente</span>
              </a>
            </div>
            <DarkMode />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
