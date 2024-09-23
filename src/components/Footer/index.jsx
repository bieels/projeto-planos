import './styles.css';

export default function Footer () {
    return (
        <>
        <footer className="rodape">
       <div className='rodape-container' >
       <img src="../img/logo.png" alt="Logo da DW Solutions" className="rodape-logo" />
        <ul className="rodape-navegacao">
            <li className="rodape-link"><a href="/#home">Início</a></li>
            <li className="rodape-link"><a href="/#destaques">Destaques</a></li>
            <li className="rodape-link"><a href="/#empresa">Empresa</a></li>
            <li className="rodape-link"><a href="/#plans">Planos</a></li>
            <li className="rodape-link"><a href="/#contato">Contato</a></li>
        </ul>
        <p className="copy">Copyright NextGen Connect 2024. Todos os direitos reservados.</p>
       </div>
    </footer>
        </>
    );
};

