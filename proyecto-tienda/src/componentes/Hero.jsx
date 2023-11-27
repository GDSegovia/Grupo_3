import React from 'react';
import Credito from '../assets/icons/Icon_credit_card.svg';
import Debito from '../assets/icons/Icon_debit_card.svg';
import Efectivo from '../assets/icons/Icon-money.svg';
import Otros from '../assets/icons/Icon-wallet.svg';
import './Hero.css';
import Boton from '.././componentes/boton/Boton';


// Definimos el componente App, que será el que renderice nuestra HERO landing page

function Hero() {
  const hadleClickEnBoton = () => {
    window.location.href = "/Categorias";
  }

  return (
    <section className="container">
      <article className="hero">
        <section className="section_hero">
          <article className="article_hero">
            <h1 id="title">“MiniCars Toys”</h1>
            
            <h2 className="hero_title-2">La mejor tienda de autos de juguete</h2>
            <p className="paragraph-1">En MiniCars Toys encontrarás una gran variedad de autos de juguete de diferentes marcas, modelos y estilos. Tenemos autos para todos los gustos y edades, desde los más clásicos hasta los más modernos. Todos nuestros autos son de alta calidad y tienen detalles realistas. Además, te ofrecemos los mejores precios y envíos rápidos y seguros.</p>
            {/* <button className="button" >Ver catálogo</button> */}
            <Boton className="boton" color="var(--Rojo)" texto="Ver Categorías" onClick={hadleClickEnBoton}/>

          </article>
        </section>
      </article>
      <br />

      <section className='pago_hero'>
        <div className="hero_card-container-1 hero_cards">         
          <a href="#" className='credito'><img className="hero_icons" src={Credito} alt="hero_icons"></img></a>
          <div className='hero_text-card'>
            <h3 className='title-3_2'>Tarjeta de Crédito</h3>
            <a className="hero_card-a" href="#" target="_blank" rel="noopener noreferrer">Ver bancos</a>
          </div>
        </div>
        <div className="hero_card-container-2 hero_cards">
          <a href="#" className='debito'><img src={Debito} className="hero_icons" alt="Tarjeta de débito"/></a>
          <div className='hero_text-card'>
            <h3 className='title-3_2'>Tarjeta de Débito</h3>
            <a className="hero_card-a" href="#" target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        </div>
        <div className="hero_card-container-3 hero_cards">
          <a href="#" className='efectivo'><img src={Efectivo} className="hero_icons" alt="hero_icons"></img></a>
          <div className='hero_text-card'>
            <h3 className='title-3_2'>Efectivo</h3>
            <a className="hero_card-a" href="#" target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        </div>
        <div className="hero_card-container-4 hero_cards">
          <a href="#" className='otros'><img src={Otros} className="hero_icons" alt="hero_icons"></img></a>
          <div className='hero_text-card'>
            <h3 className='title-3_2'>Otros medios de Pago</h3>
            <a className="hero_card-a" href="#" target="_blank" rel="noopener noreferrer">Más opciones</a>
          </div>
        </div>
      </section>
    </section>
  );
}

// Exportamos el componente App para poder usarlo en otros archivos
export default Hero;
