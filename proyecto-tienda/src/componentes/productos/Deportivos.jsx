// import React, { useState, useEffect } from "react";

import React from 'react';
import Huayra_GT from '../../assets/img/deportivos/deportivo_Paganni_Huayra_GT.jpeg'
import Thunder from '../../assets/img/deportivos/deportivo_Thunder_Elegant.jpeg';
import Vector from '../../assets/img/deportivos/deportivo_Vector_Silver.jpeg';
import Ventury from '../../assets/img/deportivos/deportivo_Ventury_Century_GT.jpeg';

import '../Categorias.css';

function Deportivos() {
  return (
    <section className="deportivos" id="deportivos">
      <article>
        <h2 className="deportivos_title">Deportivos:</h2>
        <div className='deportivos_list'>
          <a href="#" className="deportivos huayra_GT"><img src={Huayra_GT} alt="Huayra_GT" className="deportivos huayra_GT" /></a>
          <a href="#" className="deportivos thunder"><img src={Thunder} alt="Thunder" className="deportivos huayra_GT" /></a>
          <a href="" className="deportivos vector"><img src={Vector} alt="Vector" className="deportivos vector" /></a>
          <a href="" className="deportivos ventury"><img src={Ventury} alt="Ventury" className="deportivos" /></a>
        </div>

      </article>
    </section>
  );
}

export default Deportivos;