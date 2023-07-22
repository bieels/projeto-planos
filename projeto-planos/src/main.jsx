import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from '../components/NavBar.jsx'
import Chamada from '../components/Chamada'
import Destaques from '../components/Destaques'
import Sobre from '../components/Sobre'
import Planos from '../components/Planos'
import Contato from '../components/Contato'
import Institucional from '../components/institucional'
import Footer from '../components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Chamada />
    <Destaques />
    <Sobre />
    <Planos />
    <Contato />
    <Institucional />
    <Footer />
  </React.StrictMode>,
)
