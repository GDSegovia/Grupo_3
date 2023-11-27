// import React, { useState, useEffect } from "react";

import React from 'react';
import Fort from '../../assets/img/antiguos/antiguos_Fort_Must-ang_Urban_70.jpeg'
import MVA from '../../assets/img/antiguos/antiguos_MVA_Lacrima.jpeg';
import Plymout from '../../assets/img/antiguos/antiguos_Plymout_Junkeroll_86.jpeg';
import Taury from '../../assets/img/antiguos/antiguos_Taury_Montain_4X4.jpeg';

import '../Categorias.css';

function Antiguos() {
  return (
    <section className="antiguos" id="antiguos">
      <article>
        <h2 className="antiguos_title">Antiguos:</h2>
        <div className='antiguos_list'>
          <a href="ProductoIn/21" className="antiguos fort"><img src={Fort} alt="Fort" className="antiguos fort" /></a>
          <a href="ProductoIn/22" className="antiguos mva"><img src={MVA} alt="MVA" className="antiguos mva" /></a>
          <a href="ProductoIn/23" className="antiguos plymout"><img src={Plymout} alt="Plymout" className="antiguos pymout" /></a>
          <a href="ProductoIn/24" className="antiguos taury"><img src={Taury} alt="Taury" className="antiguos taury" /></a>
        </div>

      </article>
    </section>
  );
}

export default Antiguos;