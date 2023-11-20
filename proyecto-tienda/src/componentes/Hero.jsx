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
import './Hero.css';


// Definimos el componente App, que será el que renderice nuestra landing page

function Hero() {
  return (

    <section className="container">

      <article className="hero">

        <section className="section_hero">

              <article className="article_hero">

                <h1 className="title">“MiniCars Toys”</h1>
            
                <h2 className="title">La mejor tienda de autos de juguete</h2>

                <p className="paragraph-1">En MiniCars Toys encontrarás una gran variedad de autos de juguete de diferentes marcas, modelos y estilos. Tenemos autos para todos los gustos y edades, desde los más clásicos hasta los más modernos. Todos nuestros autos son de alta calidad y tienen detalles realistas. Además, te ofrecemos los mejores precios y envíos rápidos y seguros.</p>

                <button className="button">Ver catálogo</button>

              </article>

              <img src="/proyecto-tienda/src/assets/Coleccion_de_Autos_karen-vardazaryan-JBrfoV-BZts-unsplash.jpg" alt="Autos de juguete- Foto de Karen Vardazaryan en Unsplash" className="image" />
        </section>
      </article>
    </section>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos
export default Hero;
