import './styles.css';

export default function Inicio () {
    return (
        <>
            <section id="home" className="chamada">
                <img className="background-chamada" src="img/personBackground.png" alt="Background DW Solutions" />
            <div className="chamada-content">
            <h1 className="chamada-titulo">Seja Bem Vindo a <br/> DW Solutions!</h1>
            <p className="chamada-texto">A melhor Banda Larga da cidade!</p>
            <a href="#planos" className="chamada-botao botao">Conheça os planos</a>
            </div>
        </section>
        </>
    );
};