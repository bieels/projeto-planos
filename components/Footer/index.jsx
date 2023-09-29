import DarkMode from '../DarkMode';
import './styles.css';

export default function Footer () {
    return (
        <>
        <footer className="rodape">
       <div className='rodape-container' >
       <img src="../img/LOGO-DW-SOLUTIONS-Whats.png" alt="Logo da DW Solutions" className="rodape-logo" />
        <ul className="rodape-navegacao">
            <li className="rodape-link"><a href="#home">Início</a></li>
            <li className="rodape-link"><a href="#destaques">Destaques</a></li>
            <li className="rodape-link"><a href="#empresa">Empresa</a></li>
            <li className="rodape-link"><a href="#planos">Planos</a></li>
            <li className="rodape-link"><a href="#contato">Contato</a></li>
        </ul>
        <p className="copy">Copyright DW Solutions 2014. Todos os direitos reservados.</p>
       </div>
    </footer>
        </>
    );
};

