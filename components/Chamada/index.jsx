import './styles.css';

const Chamada = () => {
    return (
        <>
            <section className="chamada container">
            <h1 className="chamada__titulo">Seja Bem Vindo a <br/> DW Solutions!</h1>
            <p className="chamada__texto">(Texto descritivo)</p>
            <a href="#planos" className="chamada__botao botao">Conheça os planos</a>
        </section>
        </>
    );
};

export default Chamada;