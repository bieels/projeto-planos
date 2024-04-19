import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useLocation } from "react-router-dom";
import { KeyboardArrowRightRounded, Person2Rounded } from '@mui/icons-material/';


export default function NavBar() {
  const { scroll } = useContext(AppContext);
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  
  return (
    <>
   { !isAdminPage && (
      <header
        className={scroll > 50 ? "hidden" : "visible"}
        
      >
        <nav>
          <ul className="nav-list">
            {NAVBAR_LINK.map(
              (item, key) =>
                
                  <li key={key}>
                    <a href={`/${item.path}`}>{item.name}</a>
                  </li>
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
    )}
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
