// import React, { useState, useEffect } from "react";

import React from 'react';
import Bmvv from '../../assets/img/actuales/actuales_BMVV_M2_Urbän.jpeg'
import Ferrero from '../../assets/img/actuales/actuales_Ferrero_Turbo.jpeg';
import Minatto from '../../assets/img/actuales/actuales_Minatto_Premiun_Gray.jpeg';
import Rolls from '../../assets/img/actuales/actuales_Rolls_Royce_4_Doors.jpeg';

import '../Categorias.css';

function Actuales() {
  return (
    <section className="actuales" id="actuales">
      <article>
        <h2 className="actuales_title">Actuales:</h2>
        <div className='actuales_list'>
          <a href="#" className="actuales bmvv"><img src={Bmvv} alt="bmvv" className="actuales bmvv" /></a>
          <a href="#" className="actuales ferrero"><img src={Ferrero} alt="Ferrero" className="actuales ferrero" /></a>
          <a href="" className="actuales minatto"><img src={Minatto} alt="Minatto" className="actuales minatto" /></a>
          <a href="" className="actuales rolls"><img src={Rolls} alt="Rolls" className="actuales rolls" /></a>
        </div>

      </article>
    </section>
  );
}

export default Actuales;