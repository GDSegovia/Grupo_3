import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductoIn from './componentes/productoindividual/ProductoIn.jsx';
import Banner from './componentes/Banner.jsx';
import Categorias from './componentes/Categorias.jsx';
import Productos from './componentes/productos/Productos.jsx';
import Carrito from "./componentes/Carrito.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Categorias/ProductoIn",
    element: <ProductoIn />,
    children: [
        {
          path: "/Categorias/ProductoIn/:productId",
          element: <ProductoIn />
        }
      ]
  },
  {
    path: "/BF",
    element: <Banner />
  },
  {
    path: "/Categorias",
    element: <Categorias />,
    children: [
      {
        path: "/Categorias/:CategoriasId",
        element: <Categorias />
      }
    ]
  },
  {
    path: "/Productos",
    element: <Productos />,
  },
  {
    path: "/Carrito",
    element: <Carrito />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
