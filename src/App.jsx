import NavBar from '../components/NavBar'
import Chamada from '../components/Chamada'
import HighLight from '../components/Highlight'
import Planos from '../components/Planos'
import Sobre from '../components/Sobre'
import Diferenciais from '../components/Diferenciais'
import Contact from '../components/Contact'
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
    <HighLight />
    <Sobre />
    <Diferenciais />
    <Planos />
    <Contact />
    <Footer />
    </AppProvider>
    </>
  )
}

export default App
