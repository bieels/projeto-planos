import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function Sobre() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://json-server-dw.vercel.app/about"
        );
        const aboutData = response.data || [];
        setAbout(aboutData);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="empresa" className="sobre">
        {about.map((about) => (
          <div key={about.id} className="sobre-conteudo">
            <article>
              <h2 className="sobre-titulo">Sobre Nós</h2>
              <p className="sobre-texto">{about.text}</p>
              <p className="sobre-texto sobre-texto--destaque sobre-texto--divisao">
                {about.textSec}
              </p>
            </article>
            <img
              src="img/dwsolutionsinternet-03.jpg"
              alt="Sobre a DW Solutions"
              className="sobre-imagem"
            />
          </div>
        ))}
      </section>
    </>
  );
}
