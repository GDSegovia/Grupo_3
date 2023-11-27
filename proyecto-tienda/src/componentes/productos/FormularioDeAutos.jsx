
// import { use } from "express/lib/application";
// import React from "react";
// import React, { useState, useEffect } from "react";
// import './FormularioDeAutos.css'

// const FormularioDeAutos = ({ agregarAuto }) => {
//   const [nuevoAuto, setNuevoAuto] = useState('');

//   const handlerSubmit = (e) => {
//     e.preventDefault();
//     if (nuevoAuto.trim() !== '') {
//       agregarAuto(nuevoAuto);
//       setNuevoAuto('');
//     }
//   };
//   return (
//     <form onSubmit={handlerSubmit}>
//       <input
//         type="text"
//         value={nuevoAuto}
//         onchange={(e) => setNuevoAuto(e.target.value)}>
//       </input>
//       <button type="submit"></button>
//     </form>
//   );
// }

// export default FormularioDeAutos;