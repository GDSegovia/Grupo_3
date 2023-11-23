import React from 'react';
import Credito from '../assets/img/especiales/especiales_Cabriolett_Silver-Gold.jpeg';
import Debito from '../assets/img/especiales/especiales_Forb_Minigun_Tournament.jpg';
import Efectivo from '../assets/img/especiales/especiales_Forb_Minigun_Tournament.jpg';
import Otros from '../assets/img/especiales/especiales_Skoda_633_Polizei.jpg';

import '../especiales/Especiales.css';

function Especiales() {
  return (
    <section className="especiales">
      <article>
        <h2 className="especiales_title">Nuestros Produtos:</h2>
        <div>
          <a href="" className="especiales_actuales"><img src="#" alt="actuales" className="actuales" /></a>
          <a href="" className="especiales_antiguos"><img src="#" alt="antiguos" className="antiguos" /></a>
          <a href="" className="especiales_deportivos"><img src="#" alt="deportivos" className="deportivos" /></a>
          <a href="" className="especiales_especiales"><img src={ } alt="especiales" className="especiales" /></a>
        </div>

      </article>
    </section>
  );
}

export default Especiales;