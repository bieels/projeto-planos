import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";
import { settingsImage } from "../../utils/carousel";
import "./styles.css";
export default function Destaques() {

  const [highlights, setHighlights] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("https://json-server-dw.vercel.app/highlights");
      const highlightsData = response.data || [];
      setHighlights(highlightsData);
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };
  fetchData();
}, []);

  return (
    <>
      <section id="destaques" className="destaques">
          <Slider {...settingsImage} className="slider-image-container">
          {highlights.map((destaque) => (
              <a key={destaque.id} href="#plans" className="destaques-link">
                <img
                  src={destaque.img}
                  alt=""
                  className="destaques-painel-imagem"
                />         
              </a>
            ))}
          </Slider>
        {/* <a href="#" className="destaques-botao botao">Receber destaques por email</a> */}
      </section>
    </>
  );
}
