import React from 'react';
import './App.css'
import Navegador from './componentes/Navegador.jsx';
import Hero from './componentes/Hero.jsx';
import Categorias from './componentes/Categorias.jsx';
import Piedepagina from './componentes/Piedepagina.jsx'
import Especiales from './componentes/productos/especiales/Especiales.jsx';


function App () {
  return (
    <section>
      <header>
        <Navegador></Navegador>
      </header>
      <main>
          <Hero />
        <Categorias />
        <Especiales/>
      </main>
      <footer>
        <Piedepagina></Piedepagina>
      </footer>
    </section>

  )
// 
}

export default App
