import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { highlights } from "../../Data.json";
import { settingsImage } from "../../utils/carousel";
import "./styles.css";
export default function Destaques() {
  return (
    <>
      <section id="destaques" className="destaques">
        <div className="destaques-painel">
          <Slider {...settingsImage} className="slider-image-container">
            {highlights.map((destaque) => (
              <a key={destaque.id} href="#planos" className="destaques-link">
                <img
                  src={destaque.img}
                  alt=""
                  className="destaques-painel-imagem"
                />
                
              </a>
            ))}
          </Slider>
        </div>
        {/* <a href="#" className="destaques-botao botao">Receber destaques por email</a> */}
      </section>
    </>
  );
}
