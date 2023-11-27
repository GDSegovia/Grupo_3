// En construccion

import React from 'react';
import Baner from '../assets/img/banner_autos.webp';
import './Banner.css';

function Banner() {
  return (
    <>
    <section className="banner">
      <div>
        <h2 className="banner_title">Encuentra lo que quieres, al precio que quieres:</h2>
        <div className='banner_list'>
          <a href="#actuales" className="banner"><img src={Baner} alt="actuales" className="actuales" /></a>
        </div>
      </div>
    </section>
    </>
  );
}

export default Banner;