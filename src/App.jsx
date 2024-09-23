import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CrudPage from "./pages/Admin";
import Inicio from "./components/Inicio";
import BottomBar from "./components/BottomBar";
import BotaoTopo from "./components/BotaoTopo";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
        <BottomBar />
        <BotaoTopo />
          <NavBar />
          <Inicio />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<CrudPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
