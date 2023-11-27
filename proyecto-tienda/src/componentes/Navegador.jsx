import React from 'react';
import { Link } from 'react-router-dom'; 
import Carro from '../assets/icons/Icon-shopping-cart.svg'

import './Navegador.css';


function Navegador() {
    return (
        <nav className='navegador'>
            <a className='MiniCars' href='/'>MiniCars Toys</a>
            <ul>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Carrito"><img className='carrito' src={Carro} alt="Carrito" /></Link></li>
            </ul>
        </nav>
    );
}

export default Navegador;