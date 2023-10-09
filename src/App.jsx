import NavBar from "./components/NavBar";
import Destaques from "./components/Destaques";
import Inicio from "./components/Inicio";
import Planos from "./components/Planos";
import Sobre from "./components/Sobre";
import Diferenciais from "./components/Diferenciais";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import "./App.css";
import { AppProvider } from "./context/AppContext";
import PlanoPopup from "./components/PlanoPopup";

function App() {
  return (
    <>
      <AppProvider>
        <Modal>
          <PlanoPopup />
        </Modal>
        <NavBar />
        <Inicio />
        <Destaques />
        <Sobre />
        {/* <Diferenciais /> */}
        <Planos />
        <Contato />
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
