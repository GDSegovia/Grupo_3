import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navegador.css';

function Navegador() {
    return (
        <nav className='navegador'>
            <a className='MiniCars' href='/'>MiniCars Toys</a>
            <ul>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Carrito">Carrito</Link></li>
            </ul>
        </nav>
    );
}

export default Navegador;