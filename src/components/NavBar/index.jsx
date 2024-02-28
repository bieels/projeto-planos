import "./styles.css";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useLocation } from "react-router-dom";
import { KeyboardArrowRightRounded, Person2Rounded } from '@mui/icons-material/';


export default function NavBar() {
  const { scroll } = useContext(AppContext);
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsNavVisible(true);
  };

  const handleMouseLeave = () => {
    setIsNavVisible(false);
  };

  return (
    <>
      <header
        className={scroll > 100 ? "hidden" : "visible"}
        
      >
        <nav>
          <ul className="nav-list">
            {NAVBAR_LINK.map(
              (item, key) =>
                !isAdminPage && (
                  <li key={key}>
                    <a href={`/${item.path}`}>{item.name}</a>
                  </li>
                )
            )}
          </ul>
          {/* <div className="btn-end">
            <Link to="/admin" className="btn">
              <span className="btn-circle">
              <Person2Rounded />
              </span>
              <span className="btn-white-circle">
              <KeyboardArrowRightRounded />
              </span>
            </Link>
          </div> */}
        </nav>
      </header>
    </>
  );
}

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
