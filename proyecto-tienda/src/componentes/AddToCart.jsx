
import React, { useState, useEffect } from 'react';
// import cart from "./cart"

function addToCart(product)  {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      // Calcula el total cada vez que cambia el carrito
      const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
      setTotal(newTotal);
    }, [cart]);
    
    const existingProduct = cart.find(item => item.id === product.Id);
  
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.Id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  export default addToCart