import React from 'react';
import { useParams } from 'react-router-dom'; 
import Navegador from '../Navegador'; 
import Piedepagina from '../Piedepagina'; 
import DatosAutos from './DatosAutos'; 
import './ProductoIn.css';


function ProductoIn() {
    const { productId } = useParams(); // Obtén la ID del producto de la ruta

    // Busca el producto por ID en el array DatosAutos
    const producto = DatosAutos.find((auto) => auto.Id === parseInt(productId, 10));

    // Verifica si el producto fue encontrado
    if (!producto) {
      return <div>No se encontró el producto con el ID {productId}</div>;
    }
  
    // Muestra los detalles del producto
    return (
      <section>
        <header>
          <Navegador />
        </header>
        <main>
          <div className="producto-container">
            <img src={producto.Image} alt={producto.Nombre} />
            <h1>{producto.Nombre}</h1>
            <p>Tipo: {producto.Tipo}</p>
            <p>Precio: {producto.Precio}</p>
          </div>
        </main>
        <footer>
          <Piedepagina />
        </footer>
      </section>
    );
  }
  
  export default ProductoIn;