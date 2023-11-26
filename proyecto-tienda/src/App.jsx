// import { Router, Routes, Route } from 'react-router-dom';
// import { Especiales} from './componentes/productos/especiales/Especiales.jsx'
import React, { useEffect, useState } from 'react';
import Navegador from './componentes/Navegador.jsx';
import Hero from './componentes/Hero.jsx';
import Categorias from './componentes/Categorias.jsx';
// import Menu from './componentes/menu/Menu.jsx';
import Piedepagina from './componentes/Piedepagina.jsx'
import FormularioDeAutos from './componentes/productos/FormularioDeAutos.jsx';
import './App.css'
import Especiales from './componentes/productos/especiales/Especiales.jsx';


function App() {
  const [autos, setAutos] = useState([]);
  useEffect(() => {
    const autosGuardados = JSON.parse(localStorage.getItem('autos'));
    if (autosGuardados) {
      setAutos(autosGuardados)
    }
  }, []);
  useEffect(() => {
      localStorage.setItem('autos', JSON.stringify(autos))
    }, [autos]);
  
  
  return (
    // <Router>
    <section>
      <header>
        <Navegador></Navegador>
      </header>
      <main>
        <Hero />
        <Categorias />
        {/* <Routes>
          <Route path="./App.jsx" element={<Seccion />} />
          <Route path="./componentes/productos/Autos.jsx" element={<Autos />} />
        </Routes> */}
        {/* <Menu /> */}
        <Especiales />
        <FormularioDeAutos />
      </main>
      <footer>
        <Piedepagina></Piedepagina>
      </footer>
    </section>
    // </Router>

  )
// 
}

export default App
