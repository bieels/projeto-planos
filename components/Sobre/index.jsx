import { about } from "../../Data.json";
import './styles.css';
export default function Sobre () {
    return (
        <>
        
            <section  id="empresa" className="sobre">
            {about.map((about) => (   
                <div key={about.id} className="sobre-conteudo">
                <article>
                <p className="sobre-texto">
                <h2 className="sobre-titulo">Sobre Nós</h2>
                   {about.text}
                </p>
                <p className="sobre-texto sobre-texto--destaque sobre-texto--divisao">
                {about.textSec}
            </p>
                </article>
                <img src="img/dwsolutionsinternet-03.jpg" alt="Sobre a Apeperia" className="sobre-imagem"/>
                </div>
            ))}            
            
            {/* <ul className="diferenciais-lista">
            {about.map((about) => (           
                <li key={about.id} className="diferenciais-item diferenciais-item--tempo">
                <h2 className="item-titulo">{about.title}</h2>
                <p className="item-texto" dangerouslySetInnerHTML={{ -html: about.desc }}/>
            </li>
            ))}
           </ul> */}
      
            </section>
        </>
    );
};
