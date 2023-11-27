import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './Carrito.css'
import './Categorias.css';
import Navegador from './Navegador';
import Piedepagina from './Piedepagina';
import Actuales from './productos/Actuales';
import Antiguos from './productos/Antiguos';
import Deportivos from './productos/Deportivos';
import Especiales from './productos/Especiales';
import DatosAutos from './productoindividual/DatosAutos'
const Carrito = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcula el total cada vez que cambia el carrito
    const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    // Verifica si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - Cantidad: {product.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      {/* Aquí puedes agregar un botón para añadir productos al carrito */}
      <button onClick={() => addToCart({ id: 1, name: 'Producto 1', price: 10.99 })}>
        Añadir Producto 1 al Carrito
      </button>
      <Route path="/carrito" component={Carrito} />
    </div>
  );
};

export default Carrito;