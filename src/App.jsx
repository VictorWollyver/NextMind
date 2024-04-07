// import { useState } from "react";

import Contato from "./Components/contato/Contato";
import Cursos from "./Components/cursos/Cursos";
import Footer from "./Components/footer/Footer";
import Header from "./Components/Header";
import Home from "./Components/home/Home";
import Servicos from "./Components/servicos/Servicos";
import Sobre from "./Components/sobre/Sobre";

function App() {
  return (
    <>
      <main className="">
        <Header />
        <Home />
        <Sobre />
        <Servicos />
        <Cursos />
        <Contato />
        <Footer />
      </main>
    </>
  );
}

export default App;
