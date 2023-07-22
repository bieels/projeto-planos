const Sobre = () => {
    return (
        <>
            <section id="empresa" className="sobre container" />
            <div className="sobre__conteudo">
                <h2 className="sobre__titulo">Sobre Nós</h2>
                <p className="sobre__texto">
                    A DW Solutions atua com serviços de internet Banda Larga em diversos bairros de Simões Filho,
                    levando qualidade e tecnologia para seus usuários.
                    Atendimento de excelência, respeito e agilidade, são marcas registradas
                </p>
                {/* <p className="sobre__texto sobre__texto--destaque sobre__texto--divisao">
                    Conte com uma equipe especializada e exclusiva pra projetos incríveis em qualquer plataforma.
                </p>
                 <ul className="sobre__plataformas">
                        <li><img src="img/android.png" alt="Ícone do Android" /></li>
                        <li><img src="img/apple.png" alt="Ícone da Apple" /></li>
                        
                    </ul> */}
            </div>
            <ul className="diferenciais__lista">
                <li className="diferenciais__item diferenciais__item--tempo">
                    <h2 className="item__titulo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cinza-escuro)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg> NOSSA MISSÃO</h2>
                    <p className="item__texto">Atuar no setor de telecomunicações com responsabilidade social e ambiental,
                        fornecendo serviços na integração e manutenção à rede mundial de computadores, com excelência.
                    </p>
                </li>
                <li className="diferenciais__item diferenciais__item--foco">
                    <h2 className="item__titulo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cinza-escuro)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> NOSSA VISÃO</h2>
                    <p className="item__texto">Ser referência no setor de telecomunicações, gerando rentabilidade compatível
                        com o investimento realizado</p>
                </li>
                <li className="diferenciais__item diferenciais__item--especialistas">
                    <h2 className="item__titulo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cinza-escuro)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> VALORES</h2>
                    <p className="item__texto">- Integração entre profissionais, clientes e fornecedores; <br />
                        - Prontidão para mudanças, visando melhoria continua; <br />
                        - Respeito a vida, buscamos a excelência em segurança, meio ambiente e saúde; <br />
                        - Ética e transparência nos nossos negócios.</p>
                </li>
            </ul>
        </>
    );
};

export default Sobre;