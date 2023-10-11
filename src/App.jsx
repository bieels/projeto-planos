import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CrudPage from "./pages/Admin";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
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
