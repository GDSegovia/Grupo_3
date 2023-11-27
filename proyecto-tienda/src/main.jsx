import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductoIn from './componentes/productoindividual/ProductoIn.jsx';
import Banner from './componentes/Banner.jsx';
import Categorias from './componentes/Categorias.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />
  },
  {
    path: "/ProductoIn",
    element: <ProductoIn />,
    children: [
        {
          path: "/ProductoIn/:productId",
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
