import { Link } from "react-router-dom"

// componente para insertrar, mostrar y borrar o el crub

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/proyecto-tienda/src/App.jsx">Inicio</Link></li>
        <li><Link to="/proyecto-tienda/src/componentes/productos/especiales/Especiales.jsx">Inicio</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;