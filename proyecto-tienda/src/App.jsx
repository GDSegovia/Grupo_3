import React from 'react';
import './App.css'
import Navegador from './componentes/Navegador.jsx';
import Piedepagina from './componentes/Piedepagina.jsx'
import Hero from './componentes/Hero.jsx';


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

      </main>
      <footer>
        <Piedepagina></Piedepagina>
      </footer>
    </section>

  )

}

export default App
