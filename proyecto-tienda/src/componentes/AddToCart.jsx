import React, { useState, useEffect } from 'react';

const addToCart = (product, cart, setCart, total, setTotal) => {
  const existingProduct = cart.find(item => item.id === product.Id);

<<<<<<< HEAD
  export default addToCart

=======
  if (existingProduct) {
    setCart(cart.map(item =>
      item.id === product.Id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

export default addToCart;
>>>>>>> b695545019d8e1edd14d72476cdf1910aa45d1f4
