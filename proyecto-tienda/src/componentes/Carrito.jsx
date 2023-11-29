<<<<<<< HEAD
/*import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> b695545019d8e1edd14d72476cdf1910aa45d1f4
import './Carrito.css';
import './Categorias.css';
import Navegador from './Navegador';
import Piedepagina from './Piedepagina';
<<<<<<< HEAD
=======
import cart from './cart';  // Importa cart
<<<<<<< HEAD
import total from 
>>>>>>> b695545019d8e1edd14d72476cdf1910aa45d1f4
=======
// import total from 
>>>>>>> 3d422ee6bd6a7c4f598d363d358ba936e6cdc824

function Carrito() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  const agregarAlCarrito = (product) => {

    const existente = cart.find(item => item.id === product.id);

    if (existente) {
 
      setCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
    
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
<<<<<<< HEAD
      <header>
        <Navegador />
      </header>
      <div className='Carrito'>
        <h2>Carrito de Compras</h2>
        {        }
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              {product.nombre} - Cantidad: {product.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <footer>
        <Piedepagina />
      </footer>
=======
    <header>
      < Navegador />
    </header>
      <div className='Carrito1'>
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
>>>>>>> 3d422ee6bd6a7c4f598d363d358ba936e6cdc824
    </>
  );
}

export default Carrito;*/

import React, { useState } from 'react';
import './Carrito.css';
import './Categorias.css';
import Navegador from './Navegador';
import Piedepagina from './Piedepagina';

function Carrito() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (product) => {
    const existente = cart.find(item => item.id === product.id);

    if (existente) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const eliminarDelCarrito = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Simula una lista de productos disponibles para comprar
  const productosDisponibles = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 15 },
    { id: 3, nombre: 'Producto 3', precio: 20 },
  ];

  return (
    <>
      <header>
        <Navegador />
      </header>
      <div className='Carrito'>
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              {product.nombre} - Cantidad: {product.quantity}{' '}
              <button onClick={() => eliminarDelCarrito(product.id)}>
                Eliminar del Carrito
              </button>
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <h3>Productos Disponibles:</h3>
        <ul>
          {productosDisponibles.map(product => (
            <li key={product.id}>
              {product.nombre} - Precio: ${product.precio}{' '}
              <button onClick={() => agregarAlCarrito(product)}>
                Agregar al Carrito
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <Piedepagina />
      </footer>
    </>
  );
}

export default Carrito;
