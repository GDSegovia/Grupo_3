// import React from "react";

// function Hero() {
//   return (
//     <section className="hero-section">
//       <h1 className="title"></h1>


//     </section>
//   )
// }

// export default Hero;

import React from 'react';
// import Coleccion from '../assets/img/Coleccion_de_Autos_karen-vardazaryan-JBrfoV-BZts-unsplash.jpg'
import './Hero.css';


// Definimos el componente App, que será el que renderice nuestra HERO landing page

function Hero() {
  return (
    <section className="container">
      <article className="hero">
        <section className="section_hero">
          <article className="article_hero">
            <h1 className="title">“MiniCars Toys”</h1>
            
            <h2 className="title-2_!">La mejor tienda de autos de juguete</h2>
            <p className="paragraph-1">En MiniCars Toys encontrarás una gran variedad de autos de juguete de diferentes marcas, modelos y estilos. Tenemos autos para todos los gustos y edades, desde los más clásicos hasta los más modernos. Todos nuestros autos son de alta calidad y tienen detalles realistas. Además, te ofrecemos los mejores precios y envíos rápidos y seguros.</p>
            <button className="button">Ver catálogo</button>

          </article>
          {/* <img src={Coleccion} alt="Autos de juguete- Foto de Karen Vardazaryan en Unsplash" className="image"/> */}
        </section>
      </article>
      <section className='pago_hero'>
        <h2 className="title-2_2">Métodos de pago</h2>
        <br />
        <div className='pay_cards'>
          <button className="pay_credit">Tarjeta de Crédito</button>
          <button className="pay_cash">Pago al Contado</button>
        </div>
      </section>
    </section>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos
export default Hero;
