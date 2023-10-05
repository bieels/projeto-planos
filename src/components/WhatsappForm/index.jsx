import React, { useState } from "react";
import "./styles.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formate a mensagem com o nome
    const formattedMessage = `Olá ${name}, ${message}`;

    // Encode a mensagem formatada
    const encodedMessage = encodeURIComponent(formattedMessage);

    // Número de telefone do destinatário (substitua pelo número desejado)
    const phoneNumber = "COLOQUE_O_NUMERO_AQUI";

    // Crie a URL do WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abra a URL do WhatsApp em uma nova aba
    window.open(whatsappURL, "_blank");

    // Limpe os campos de entrada
    setName("");
    setMessage("");
  };

  return (
    <section className="WhatsAppForm">
      <div className="form-group">
        <h2 className="social-title">Envie uma Mensagem</h2>
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

          <button type="submit" className="submit-button">
            <WhatsAppIcon />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

