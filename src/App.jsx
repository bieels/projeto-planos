import NavBar from '../components/NavBar'
import Chamada from '../components/Chamada'
import Destaques from '../components/Destaques'
import Planos from '../components/Planos'
import Sobre from '../components/Sobre'
import Diferenciais from '../components/Diferenciais'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

import './App.css'
import { AppProvider } from './context/AppContext'

function App() {

  return (
    <>
    <AppProvider>
    <NavBar />
    <Modal children={<h1>Test</h1>} />
    <Chamada /> 
    <Destaques />
    <Sobre />
    <Diferenciais />
    <Planos />
    <Contato />
    <Footer />
    </AppProvider>
    </>
  )
}

export default App
