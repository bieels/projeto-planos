const Institucional = () => {
    return (
        <>
        <section className="institucional container">
            <h2 className="institucional__titulo">Institucional</h2>
            <div className="institucional__conteudo">
                <div className="institucional__informacoes">
                    <p className="institucional__descricao">Um pouco mais sobre a DW</p>
                    <address className="institucional__endereco">
                        (Endereço Aqui)
                        <article className="institucional__contato">
                             <p><a href="tel:+557131992109" className="institucional__contato-telefone">(71) 3199-2109</a> ou
                                <a href="mailto:contatos@dwsolutions.com.br"
                                    className="institucional__contato-email">contatos@dwsolutions.com.br</a>
                            </p>
                        </article>
                    </address>
                </div>
                <video src="" className="institucional__" controls></video>
            </div>
        </section>
        </>
    );
};

export default Institucional;