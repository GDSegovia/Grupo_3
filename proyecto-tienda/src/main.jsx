import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ProductoIn from './componentes/productoindividual/ProductoIn.jsx';
import Banner from './componentes/Banner.jsx';
import Categorias from './componentes/Categorias.jsx';
import Productos from './componentes/productos/Productos.jsx';
import Carrito from './componentes/Carrito.jsx';
import Reseñas from './componentes/Reseñas/Reseñas.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Categorias/ProductoIn',
    element: <ProductoIn />,
    children: [
      {
        path: ':productId',
        element: <ProductoIn />,
      },
    ],
  },
  {
    path: '/BF',
    element: <Banner />,
  },
  {
    path: '/Categorias',
    element: <Categorias />,
    children: [
      {
        path: ':CategoriasId',
        element: <Categorias />,
      },
    ],
  },
  {
    path: '/Productos',
    element: <Productos />,
  },
  {
    path: '/Carrito',
    element: <Carrito />,
  },
  {
    path: '/Reseñas',
    element: <Reseñas />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
