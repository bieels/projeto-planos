import './Destaques.css';

const Destaques = () => {
    return (
        <>
        <section id="destaques" className="destaques container">
             <h2 className="destaques__titulo"></h2>
            <div className="destaques__painel">
                <a href="#planos">
                    <figure className="destaques__link link1">
                        <img src="img/dwsolutionsinternet-20230520-0001.jpg" alt="" className="destaques__painel-imagem" />
                         {/* <figcaption className="destaques__painel-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption> */}
                    </figure>
                </a>
                <a href="#planos">
                    <figure className="destaques__link">
                        <img src="img/dwsolutionsinternet-20230520-0002.jpg" alt="" className="destaques__painel-imagem" />
                         {/* <figcaption className="destaques__painel-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption> */}
                    </figure>
                </a>
                <a href="#planos">
                    <figure className="destaques__link link3">
                        <img src="img/dwsolutionsinternet-20230520-0003.jpg" alt="" className="destaques__painel-imagem" />
                         {/* <figcaption className="destaques__painel-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption> */}
                    </figure>
                </a>
            </div>
            <a href="#" className="destaques__botao botao">Receber destaques por email</a>
        </section>
        </>
    );
};

export default Destaques;