import NavBar from "../../components/NavBar";
import Destaques from "../../components/Destaques";
import Inicio from "../../components/Inicio";
import Planos from "../../components/Planos";
import Sobre from "../../components/Sobre";
import Diferenciais from "../../components/Diferenciais";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import PlanoPopup from "../../components/PlanoPopup";

import { AppProvider } from "../../context/AppContext";

export default function Home() {
  return (
    <>
      <AppProvider>
        <Modal children={<PlanoPopup />}/>
        <Destaques />
        <Sobre />
        {/* <Diferenciais /> */}
        <Planos />
        <Contato />
      </AppProvider>
    </>
  );
}

