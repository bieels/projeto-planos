import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Footer() {

  const { NAVBAR_LINK } = useContext(AppContext);
  
  return (
    <>
      <footer className="rodape">
        <div className="rodape-container">
          <img
            src="../img/LOGO-DW-SOLUTIONS-Whats.png"
            alt="Logo da DW Solutions"
            className="rodape-logo"
          />
          <ul className="rodape-navegacao">
            {NAVBAR_LINK.map((item, key) => (
              <li key={key} className="rodape-link">
                <a href={`/${item.path}`}>{item.name}</a>
              </li>
            ))}
          </ul>
          <p className="copy">
            Copyright DW Solutions 2014. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
