import { about } from "../../Data.json";
import './styles.css';
export default function Sobre () {
    return (
        <>
        
            <section id="empresa" className="sobre container">
            <div className="sobre__conteudo">
                <h2 className="sobre__titulo">Sobre Nós</h2>
            {about.map((about) => (   
                <div>
                <p className="sobre__texto">
                   {about.text}
                </p>
                <p class="sobre__texto sobre__texto--destaque sobre__texto--divisao">
                {about.textSec}
            </p>
                </div>
            ))}            
            </div>
            <img src="img/dwsolutionsinternet-03.jpg" alt="Sobre a Apeperia" class="sobre__imagem"/>
            </section>
        </>
    );
};
