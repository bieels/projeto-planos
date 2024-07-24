"use client"

import BotaoTopo from "@/components/BotaoTopo";
import Contato from "@/components/Contato";
import Destaques from "@/components/Destaques";
import Footer from "@/components/Footer";
import Inicio from "@/components/Inicio";
import NavBar from "@/components/NavBar";
import Planos from "@/components/Planos";
import Promo from "@/components/Promo";
import Sobre from "@/components/Sobre";
import { AppProvider } from "@/context/AppContext";



export default function Home() {
  return (
    <>
    <AppProvider>
    <BotaoTopo />
    <NavBar />
    <Inicio />
    <Destaques />
    <Promo />
    <Planos />
    <Sobre />
    <Contato />
    <Footer />
    </AppProvider>
    </>
  );
}
