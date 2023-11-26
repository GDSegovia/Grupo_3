// import React, { useState, useEffect } from "react";

import React from 'react';
import Cabriolet from '../../../assets/img/especiales/especiales_Cabriolett_Silver-Gold.jpeg'
import Chevrolett from '../../../assets/img/especiales/especiales_Chevrolett_Modify_SuperCharged.jpg';
import Forb from '../../../assets/img/especiales/especiales_Forb_Minigun_Tournament.jpg';
import Skoda from '../../../assets/img/especiales/especiales_Skoda_633_Polizei.jpg';

import '../../Categorias.css';

function Especiales() {
  return (
    <section className="especiales" id="especiales">
      <article>
        <h2 className="especiales_title">Especiales:</h2>
        <div className='especiales_list'>
          <a href="#" className="especiales cabriolet"><img src={Cabriolet} alt="actuales" className="actuales" /></a>
          <a href="#" className="especiales chevrolett"><img src={Chevrolett} alt="especiales Chevrolett Modify SuperCharged" className="antiguos" /></a>
          <a href="" className="especiales_deportivos"><img src={Forb} alt="deportivos" className="deportivos" /></a>
          <a href="" className="especiales_especiales"><img src={Skoda} alt="especiales" className="especiales" /></a>
        </div>

      </article>
    </section>
  );
}

export default Especiales;