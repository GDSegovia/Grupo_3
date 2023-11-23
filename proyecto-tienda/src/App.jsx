import React from 'react';
import './App.css'
import Navegador from './componentes/Navegador.jsx';
import Hero from './componentes/Hero.jsx';
import Categorias from './componentes/Categorias.jsx';
import Piedepagina from './componentes/Piedepagina.jsx'


function App () {
  return (
    <section>
      <header>
        <Navegador></Navegador>
      </header>
      <main>
        <section>
          <Hero></Hero>
        </section>

        <section>
          <Categorias></Categorias>
        </section>
      </main>
      <footer>
        <Piedepagina></Piedepagina>
      </footer>
    </section>

  )

}

export default App
