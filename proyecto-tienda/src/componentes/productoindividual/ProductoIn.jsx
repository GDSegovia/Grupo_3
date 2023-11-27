import { useParams } from 'react-router-dom';
import Navegador from '../Navegador';
import Piedepagina from '../Piedepagina';
import DatosAutos from './DatosAutos';
import Boton from '../boton/Boton';
import './ProductoIn.css';
import React, { useState, useEffect } from 'react';
import addToCart from '../AddToCart';


function ProductoIn() {
  const { productId } = useParams(); // Obtén la ID del producto de la ruta

  // Busca el producto por ID en el array DatosAutos
  const producto = DatosAutos.find((auto) => auto.Id === parseInt(productId, 10));

  // Verifica si el producto fue encontrado
  if (!producto) {
    return <div>No se encontró el producto con el ID {productId}</div>;
  }

  // Aca deberia hacer que se mande al carrito con el boton
  const handleClickEnBoton = () => {
    addToCart(producto, cart, setCart, total, setTotal);
    history.push('/Carrito'); 
  }
  // Muestra los detalles del producto
  return (
    <section>
      <header>
        <Navegador />
      </header>
      <main className="main-container">
        <div className="producto-container">
          <img src={producto.Image} alt={producto.Nombre} />
          <div className="detalle-container">
            <h2>Categoria: {producto.Tipo}</h2>
            <h1 className="nombre-producto">{producto.Nombre}</h1><br />
            <div className='descripcionProducto'>
            <h3>Descripcion del producto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur officia fugiat sapiente suscipit sit, maxime laborum unde neque esse qui maiores nesciunt tempore ipsam illum iusto, natus, quaerat rerum.</p>
            </div>
            <p className="precio"><strong>Precio: <span className="precio-destacado">{producto.Precio}</span></strong></p> <br />
            <Boton className="boton" color="#012a52" texto="Añadir al Carrito" onClick={handleClickEnBoton} />
          </div>
        </div>
      </main>
      <footer>
        <Piedepagina />
      </footer>
    </section>
  );
}

export default ProductoIn;