import './styles.css';


const Contact = () => {
    return (
        <>
        <section id="contato" className="contato container">
            <h2 className="contato__titulo">Contato</h2>
            <p>Entre em contato com a gente</p>
            <a href="#" className="contato__botao botao">Entre em contato</a>
            <div className="endereco">
                <div className="endereco__informacoes">
                    <p className="endereco__descricao">Um pouco mais sobre a DW</p>
                    <address className="endereco__content">
                       <h2 className='endereco__titulo'>Nossas Redes Sociais</h2>
                        <article className="endereco__contato">
                             <p><a href="tel:+557131992109" className="endereco__contato-telefone">(71) 3199-2109</a> ou
                                <a href="mailto:contatos@dwsolutions.com.br"
                                    className="endereco__contato-email">contatos@dwsolutions.com.br</a>
                            </p>
                        </article>
                    </address>
                </div>
                <iframe className="endereco__maps" style={{filter: "var(--invert)"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.3152589835986!2d-38.397825372436536!3d-12.802478492451216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716150c7af02927%3A0x99b492e80fe0b94e!2sDW%20Solutions%20Internet%20Banda%20Larga!5e0!3m2!1spt-BR!2sbr!4v1694290886580!5m2!1spt-BR!2sbr"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>           
        </section>
        </>
    );
};

export default Contact;

