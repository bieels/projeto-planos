import DarkMode from "../DarkMode";
import dwlogo from "/img/dwlogo3.png";
import "./styles.css";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../src/context/AppContext"

export default function NavBar () {
  const { active, setActive } = useContext(AppContext);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    if (scroll < 200) {
      window.addEventListener('scroll', () => setScroll(window.scrollY));
    } else {
      return
    }
  }, [scroll])  
  return (
    <>
      <header>
        <nav style={{
        background: scroll > 100 ? 'black' : 'transparent',
      }}>
          <a className="logo" href="/">
            <img src={dwlogo} alt="" />
          </a>
          <ul className="nav-list">
          {NAVBAR_LINK.map((item, key) =>
            <li key={key}>
              <a href={`/${item.path}`}>{item.name}</a>
            </li>
          )}
          </ul>
          <div className="btn-end">
            <div className="cliente">
              <a href="#" className="btn">
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
                  ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <span className="btn-white-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="icon-arrow-right"
                    viewBox="0 0 21 12"
                  ><path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                  </svg>
                </span>
                {/* <span className="btn-text">Área do Cliente</span> */}
              </a>
            </div>
            <DarkMode />
          </div>
        </nav>
      </header>
    </>
  );
};


const NAVBAR_LINK = [
  {
    name: "Início",
    path: '#home',
    page: false,
  },
  {
    name: "Destaques",
    path: '#destaques',
    page: false,
    
  },
  {
    name: "Empresa",
    path: '#empresa',
    page: false,
    
  },
  {
    name: "Planos",
    path: '#planos',
    page: false,
    
  },
  {
    name: "Contato",
    path: '#contato',
    page: false,
    
  }
  ]