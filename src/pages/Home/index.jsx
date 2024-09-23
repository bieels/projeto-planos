import Destaques from "../../components/Destaques";
import Planos from "../../components/Planos";
import Sobre from "../../components/Sobre";
import Contato from "../../components/Contato";
import Modal from "../../components/Modal";
import PlanoPopup from "../../components/PlanoPopup";
import { AppProvider, AppContext } from "../../context/AppContext";
import Promo from "../../components/Promo";
import { useContext } from "react";
import WhatsAppForm from "../../components/WhatsappForm";

export default function Home() {
  const { modalContent } = useContext(AppContext);
  return (
    <>
      <AppProvider>
        <Modal />
        <Destaques />
        {/* <Diferenciais /> */}
        <Promo />
        <Planos />
        <Sobre />
        <Contato />
      </AppProvider>
    </>
  );
}
