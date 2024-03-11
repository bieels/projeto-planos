import "./styles.css";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import WhatsAppForm from "../WhatsappForm";

export default function Promo() {
  const { setShowModal, setModalContent  } = useContext(AppContext);
  return (
    <div className="promo-container">
      <div className="promo-content">
        <img className="promo-img" src="img/router.png" alt="" />
       <div className="promo-right">
       <div className="promo-text">
          <h2 className="promo-title">Roteador em Comodato</h2>
          <p className="promo-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa pariatur perspiciatis eos reiciendis rerum accusamus fuga nobis dolorum itaque vitae quisquam ipsum, minima sequi ipsa in sed vero maxime aliquam!</p>
        </div>
          <button className="button" onClick={() => {setShowModal(true); setModalContent(<WhatsAppForm />)}}>Falar com Atendente</button>
       </div>
      </div>
    </div>
  );
}
