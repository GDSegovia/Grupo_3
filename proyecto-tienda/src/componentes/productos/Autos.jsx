import Autos from './Autos'

const Autos = ({ autos, completarAuto, eliminarAuto }) => {
  // const { id, nombre, completada } = autos;
  
  const completada = () => {
    completarAuto(id);
  };

  const eliminar = () => {
    eliminarAuto(id);
  };


  return (
    <div className="autos">
      <span className={completada ? 'completada' : ''}>{nombre}</span>
      <button onClick={competar}>
        {completada ? 'Anular' : 'Completar'}
      </button>
      <button onClick={eliminar}>Eliminar
      </button>
      {/* map de autos */}
    </div>
  );
}

export default Autos;