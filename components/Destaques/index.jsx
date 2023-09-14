import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { highlights } from "../../Data.json";
import { settingsImage } from "../../utils/carousel";
import "./styles.css";
export default function Destaques() {
  return (
    <>
      <section id="destaques" className="destaques container">
        <h2 className="destaques__titulo"></h2>
        <div className="destaques__painel">
          <Slider {...settingsImage} className="slider-image-container">
            {highlights.map((destaque) => (
              <a href="#planos">
                <figure className="destaques__link">
                  <img
                    src={destaque.img}
                    alt=""
                    className="destaques__painel-imagem"
                  />
                  {/* <figcaption className="destaques__painel-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption> */}
                </figure>
              </a>
            ))}
          </Slider>
        </div>
        {/* <a href="#" className="destaques__botao botao">Receber destaques por email</a> */}
      </section>
    </>
  );
}
