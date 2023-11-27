// import { Router, Routes, Route } from 'react-router-dom';
// import { Especiales} from './componentes/productos/especiales/Especiales.jsx'
import React, { useEffect, useState } from 'react';
import Navegador from './componentes/Navegador.jsx';
import Hero from './componentes/Hero.jsx';
// import Menu from './componentes/menu/Menu.jsx';
import Piedepagina from './componentes/Piedepagina.jsx'
// import FormularioDeAutos from './componentes/productos/FormularioDeAutos.jsx';
import './App.css'
import Banner from './componentes/Banner.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductoIn from './componentes/productoindividual/ProductoIn.jsx';
import Carrito from './componentes/Carrito.jsx';


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
    <section>
      <header>
        <Navegador></Navegador>
      </header>
      <main>
        <Carrito></Carrito>
        <Hero />
        <Banner />
      </main>
      <footer>
        <Piedepagina></Piedepagina>
      </footer>
    </section>

  )

}

export default App
