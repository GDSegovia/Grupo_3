// instalar el paquete de: $ npm i styled-components
// import { Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Carro from '../../assets/icons/Icon-shopping-cart.svg'

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 720) {
        setClicked(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className='NavContainer'>
      <a className='MiniCars' href='/'>MiniCars Toys</a>
      <BgDiv className={`links ${clicked ? 'active' : ''}`}></BgDiv>
      <div className='burger'>
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <nav className={`links ${clicked ? 'active' : ''}`}>
        <Link to="/Categorias" className='link1'>Categorías</Link>
        <Link to="/Productos" className='link1'>Productos</Link>
        <Link to="/Reseñas" className='link1'>Reseñas</Link>
        <Link to="/Carrito" className='link1'><img className='carrito' src={Carro} alt="Carrito" /></Link>
      </nav>
    </div>
  );
}

export default NavBar;

const BgDiv = styled.div`
  position: absolute;
  background-color: var(--azul-oscuro);
  right: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease;
  &.active {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
  }
`


