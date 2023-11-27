import React from "react";
import Logo from "../assets/icons/Logo-tipo.svg"
import './Piedepagina.css';

function Piedepagina() {
  return (
    <footer className="Piedepagina">

      <img src={Logo} alt="logo" />

      <a href="#">Terminos y Condiciones</a>
      <a href="#">Ayuda</a>

      <p>Copyright © 1999-2023 Grupo 3.</p>
      <p>Paraná 467 3er piso Dto. 12, C1017 CABA</p>

    </footer>
  );
}

export default Piedepagina;