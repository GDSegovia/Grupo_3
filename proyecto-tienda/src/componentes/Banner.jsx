// En construccion

import React from 'react';
import Baner from '../assets/img/banner_autos.webp';

import './Categorias.css';

function Banner() {
  return (
    <section className="banner">
      <article>
        <h2 className="banner_title">Encuentra lo que quieres, al precio que quieres:</h2>
        <div className='banner_list'>
          <a href="#actuales" className="banner"><img src={Baner} alt="actuales" className="actuales" /></a>
        </div>
      
      </article>
    </section>
  );
}

export default Banner;