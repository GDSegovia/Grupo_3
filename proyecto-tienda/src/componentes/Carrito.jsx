import React, { useState, useEffect } from 'react';
import './Carrito.css'
import './Categorias.css';
import Navegador from './Navegador';
import Piedepagina from './Piedepagina';


function Carrito() {

  return (
    <>
    <header>
      < Navegador />
    </header>
    <div className='Carrito'>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - Cantidad: {product.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
    <footer>
      <Piedepagina />
    </footer>
    </>
  );
};

export default Carrito;