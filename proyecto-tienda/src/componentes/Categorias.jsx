import React from 'react';
import Bmvv from '../assets/img/actuales/actuales_BMVV_M2_Urbän.jpeg';
import Plymout from '../assets/img/antiguos/antiguos_Plymout_Junkeroll_86.jpeg';
import Paganni from '../assets/img/deportivos/deportivo_Paganni_Huayra.jpeg';
import Cabriolet from '../assets/img/especiales/especiales_Cabriolett_Silver-Gold.jpeg';

import './Categorias.css';

function Categorias() {
  return (
    <section className="categorias">
      <article>
        <h2 className="categorias_title">Nuestros Produtos:</h2>
        <div className='categorias_list'>
          <a href="#" className="categorias_actuales"><h3>Actuales</h3><img src={Bmvv} alt="actuales" className="actuales" /></a>
          <a href="#" className="categorias_antiguos"><h3>Antiguos</h3><img src={Plymout} alt="antiguos" className="antiguos" /></a>
          <a href="#" className="categorias_deportivos"><h3>Deportivos</h3><img src={Paganni} alt="deportivos" className="deportivos" /></a>
          <a href="#" className="categorias_especiales"><h3>Especiales</h3><img src={Cabriolet} alt="especiales" className="especiales" /></a>
        </div>
      
      </article>
    </section>
  );
}

export default Categorias;