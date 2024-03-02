import './styles.css';
import dwlogo from "/img/dwlogo3.png";
import { useLocation } from 'react-router-dom';

export default function Inicio () {

    const location = useLocation();


  const isAdminPage = location.pathname === "/admin";


    return (
        <>
            <section id="home" className="chamada">
                {/* <img className="background-chamada" src="img/personBackground.png" alt="Background DW Solutions" /> */}
            {!isAdminPage ? (<div className="chamada-content">
            <a className="logo" href="/">
            <img src={dwlogo} alt="" />
          </a>
            <h1 className="chamada-titulo">Seja Bem Vindo a <br/> DW Solutions!</h1>
            <p className="chamada-texto">A melhor Banda Larga da cidade!</p>
            <a href="#plans" className="chamada-botao botao">Conheça os planos</a>
            </div>) : (<div className="chamada-content">
            <h1 className="chamada-titulo">Seja Bem Vindo a <br/> DW Solutions!</h1>
            <p className="chamada-texto">Área administrativa do site.</p>
            
            </div>)}
        </section>
        </>
    );
};