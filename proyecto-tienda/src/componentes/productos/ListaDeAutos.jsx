import Autos from './Autos'

const ListaDeAutos = ({ autos, completarAuto, eliminarAuto }) => {
  return (
    <div>
      <h2>Inventario de Autos Autos</h2>
      {autos.map((autos)=>(
      <Autos
        key={Autos.id}
        autos={autos}
        completarAuto={completarAuto}
        eliminarAuto={eliminarAuto}
        />
      ))}
    </div>
  );
}

export default ListaDeAutos;