"use client"

import "./styles.css";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import WhatsAppForm from "../WhatsappForm";
import { WhatsApp } from "@mui/icons-material";

export default function Promo() {
  const { setShowModal, setModalContent  } = useContext(AppContext);
  return (
    <div className="promo-container">
      <div className="promo-content">
        <img className="promo-img" src="img/router.png" alt="" />
       <div className="promo-right">
       <div className="promo-text">
          <h2 className="promo-title">Roteador em Comodato</h2>
          <p className="promo-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa pariatur perspiciatis eos reiciendis rerum accusamus fuga nobis dolorum itaque vitae quisquam ipsum, minima sequi ipsa in sed vero maxime!</p>
        </div>
          <button className="button" onClick={() => {setShowModal(true); setModalContent(<WhatsAppForm />)}}><WhatsApp className="whatsapp-icon"/> Falar com Atendente</button>
       </div>
      </div>
    </div>
  );
}
