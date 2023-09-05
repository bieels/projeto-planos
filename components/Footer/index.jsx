import DarkMode from '../DarkMode';
import './styles.css';

const Footer = () => {
    return (
        <>
        <footer className="rodape container">
        <img src="../img/LOGO-DW-SOLUTIONS-Whats.png" alt="Logo da Apeperia" className="rodape__logo" />
        <ul className="rodape__navegacao">
            <li className="rodape__link"><a href="#home">Início</a></li>
            <li className="rodape__link"><a href="#destaques">Destaques</a></li>
            <li className="rodape__link"><a href="#empresa">Empresa</a></li>
            <li className="rodape__link"><a href="#planos">Planos</a></li>
            <li className="rodape__link"><a href="#contato">Contato</a></li>
        </ul>
        <p className="copy">Copyright DW Solutions 2014. Todos os direitos reservados.</p>
    </footer>
        </>
    );
};

export default Footer;