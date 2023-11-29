import React, { useState } from "react";
import UNA from "../../assets/estrellas/1estrellas.png";
import DOS from "../../assets/estrellas/2estrellas.png";
import TRES from "../../assets/estrellas/3estrellas.png";
import CUATRO from "../../assets/estrellas/4estrellas.png";
import CINCO from "../../assets/estrellas/5estrellas.png";
import NO from "../../assets/estrellas/apagado.png";
import SI from "../../assets/estrellas/prendido.png";
import eliminar from "../../assets/estrellas/eliminar.png";
import "./TaskItem.css";

const getRatingImage = (rating) => {
  switch (rating) {
    case 1:
      return UNA;
    case 2:
      return DOS;
    case 3:
      return TRES;
    case 4:
      return CUATRO;
    case 5:
      return CINCO;
    default:
      return CINCO;
  }
};

const TaskItem = ({ task, onDelete, onMarkAsUtil }) => {
  const [isUtil, setIsUtil] = useState(task.util);
  const [isRemoving, setIsRemoving] = useState(false); // Agrega el estado isRemoving

  const ratingImage = getRatingImage(task.rating);
  const utilImage = isUtil ? SI : NO;

  const handleToggleUtil = () => {
    setIsUtil(!isUtil);
    onMarkAsUtil(task.id, !isUtil);
  };

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onDelete(task.id);
    }, 800);
  };

  return (
    <div className={`task-item ${isUtil ? 'util' : ''} ${isRemoving ? 'remove' : ''}`}>
      <div className="botonEliminar">
        <button onClick={handleDelete}>
          <img className="delete-btn" src={eliminar} alt="Borrar Reseña" />
        </button>
      </div>
      <img className="estrellasTI" src={ratingImage} alt={`Rating: ${task.rating}`} />
      <p>{task.review}</p>
      <h3>- {task.author}</h3>
      <div className="botonUtil">
        <button onClick={handleToggleUtil}>
          <img className="util-btn" src={utilImage} alt={isUtil ? "Util" : "Not Util"} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
