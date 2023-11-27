// Categorias.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Bmvv from '../assets/img/actuales/actuales_BMVV_M2_Urbän.jpeg';
import Plymout from '../assets/img/antiguos/antiguos_Plymout_Junkeroll_86.jpeg';
import Paganni from '../assets/img/deportivos/deportivo_Paganni_Huayra.jpeg';
import Cabriolet from '../assets/img/especiales/especiales_Cabriolett_Silver-Gold.jpeg';

import './Categorias.css';
import Navegador from './Navegador';
import Piedepagina from './Piedepagina';
import Actuales from './productos/Actuales';
import Antiguos from './productos/Antiguos';
import Deportivos from './productos/Deportivos';
import Especiales from './productos/Especiales';

function Categorias() {
  const { CategoriasId } = useParams(); 

  return (
    <>
<header>
  < Navegador />
</header>
    <section className="categorias">
        <h2 className="categorias_title">Elija una Categoria:</h2>
        <div className='categorias_list'>
          <a href="/Categorias/1" className="categorias"><h3>Actuales</h3><img src={Bmvv} alt="actuales" className="actuales" /></a>
          <a href="/Categorias/2" className="categorias"><h3>Antiguos</h3><img src={Plymout} alt="antiguos" className="antiguos" /></a>
          <a href="/Categorias/3" className="categorias"><h3>Deportivos</h3><img src={Paganni} alt="deportivos" className="deportivos" /></a>
          <a href="/Categorias/4" className="categorias"><h3>Especiales</h3><img src={Cabriolet} alt="especiales" className="especiales" /></a>
        </div>
         {/* Utiliza CategoriasId como condición para renderizar el componente Actuales */}
         {parseInt(CategoriasId) === 1 && <Actuales />}
         {parseInt(CategoriasId) === 2 && <Antiguos />}
         {parseInt(CategoriasId) === 3 && <Deportivos />}
         {parseInt(CategoriasId) === 4 && <Especiales />}
      </section>
    <footer>
      <Piedepagina />
    </footer>
    </>
  );
}

export default Categorias;