import React, { useState, useEffect } from 'react';
import './Carrito.css'
import './Categorias.css';
import Navegador from './Navegador';
import Piedepagina from './Piedepagina';


const Carrito = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcula el total cada vez que cambia el carrito
    const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.Id);
  
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.Id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

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