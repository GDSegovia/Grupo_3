import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navegador.css';

function Navegador() {
    return (
        <nav className='navegador'>
            <p className='logo'>Autitos</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/BF">BlackFriday</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
            </ul>
        </nav>
    );
}

export default Navegador;