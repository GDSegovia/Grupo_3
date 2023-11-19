import React from 'react';
import './Navegador.css';

function Navegador () {
    return(
        <nav className ='navegador'>
                <p className='logo'>Autitos</p>
                <ul>
                    <li>HomePage</li>
                    <li>AgregarAutos</li>
                    <li>ComprarAutos</li>
                    <li>Carrito</li>
                </ul>
        </nav>
    )
}

export default Navegador;