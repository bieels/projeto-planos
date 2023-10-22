import DarkMode from "../DarkMode";
import dwlogo from "/img/dwlogo3.png";
import "./styles.css";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Link , useLocation } from "react-router-dom";

export default function NavBar() {
  const { scroll } = useContext(AppContext);
  const location = useLocation();

  const isAdminPage = location.pathname === "/admin";

  return (
    <>
      <header>
        <nav
          style={{
            background: scroll > 100 ? "var(--bg-nav)" : "transparent",
            boxShadow:
              scroll > 100 ? "rgba(0, 0, 0, 0.50) 0px 7px 20px" : "none",
          }}
        >
          <a className="logo" href="/">
            <img src={dwlogo} alt="" />
          </a>
          <ul className="nav-list">
            {NAVBAR_LINK.map((item, key) => (
             (!isAdminPage && (
              <li key={key}>
                  <a href={`/${item.path}`}>{item.name}</a>
                </li>
             )  )
            ))}
          </ul>
          <div className="btn-end">
            <Link to="/admin" className="btn">
              <span className="btn-circle">
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
              <span className="btn-white-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="icon-arrow-right"
                  viewBox="0 0 21 12"
                >
                  <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                </svg>
              </span>
            </Link>
            <DarkMode />
          </div>
        </nav>
      </header>
    </>
  );
}

const NAVBAR_LINK = [
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
    name: "Empresa",
    path: "#empresa",
    page: false,
  },
  {
    name: "Planos",
    path: "#planos",
    page: false,
  },
  {
    name: "Contato",
    path: "#contato",
    page: false,
  },
];
