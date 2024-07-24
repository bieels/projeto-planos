import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function NavBar() {
  const { scroll, NAVBAR_LINK } = useContext(AppContext);
  
  return (
    <>
      <header className={scroll > 50 ? "hidden" : "visible"}>
        <nav>
          <ul className="nav-list">
            {NAVBAR_LINK.map((item, key) => (
              <li key={key}>
                <a href={`/${item.path}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
