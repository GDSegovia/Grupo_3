import React from "react";
import Logo from "../assets/icons/Logo-tipo.svg"
import './Piedepagina.css';

function Piedepagina() {
  return (
    <footer className="Piedepagina">
      <div className="logosvg">
        <img src={Logo} alt="logo" />
      </div>
      <div className="terminos">
        <a href="#">Terminos y Condiciones</a>
        <a href="#">Ayuda</a>
      </div>
      <div className="derechos">
        <span>Copyright © 1999-2023 Grupo 3.</span>
        <span>Paraná 467 3er piso Dto. 12, C1017 CABA</span>
      </div>
    </footer>
  );
}

export default Piedepagina;