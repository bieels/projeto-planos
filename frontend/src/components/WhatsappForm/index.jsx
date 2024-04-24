import React, { useState } from "react";
import "./styles.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `Meu nome é ${name}. ${message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);

    const phoneNumber = "COLOQUE_O_NUMERO_AQUI";

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setName("");
    setMessage("");
  };

  return (
    <div className="WhatsAppForm">
      <div className="form-group">
        <h2 className="social-title">Envie uma Mensagem <br />para nós</h2>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            <span className="bar"></span>
            <label>Nome</label>
          </div>

          <div className="group">
            <input
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              type="text"
            />
            <span className="bar"></span>
            <label>Mensagem</label>
          </div>

          <button type="submit" className="button">
            <WhatsAppIcon className="btn-icon"/>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

