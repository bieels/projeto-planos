import "./styles.css";

export default function Sobre() {



  return (
    <>
      <section id="empresa" className="sobre">
        <div className="sobre-container">
        <div  className="sobre-content">
          <article>
            <h2 className="sobre-titulo">Somos o Provedor mais rápido da Cidade!</h2>
            <p className="sobre-texto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores eum impedit porro cumque perspiciatis cum ad iure
              officiis qui maiores soluta ipsum, aliquam aperiam quod itaque
              labore nam, animi consequatur.
            </p>
            <div className="sobre-texto-sec"> 
              <div>
                <h3 className="sec-titulo">lorem ipsun</h3>
                <p className="texto-sec">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem possimus corporis soluta quo, eligendi temporibus
                  at.
                </p>
              </div>
              <div>
              <h3 className="sec-titulo">lorem ipsun</h3>
                <p className="texto-sec">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem possimus corporis soluta quo, eligendi temporibus
                  at.
                </p>
              </div>
            </div>
          </article>
          <img
            src="https://picsum.photos/1179/2096"
            alt="Sobre a DW Solutions"
            className="sobre-imagem"
          />
        </div>
        </div>
      </section>
    </>
  );
}
