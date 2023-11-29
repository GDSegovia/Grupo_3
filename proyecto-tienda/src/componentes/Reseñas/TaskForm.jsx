import React, { useState } from "react";
import UNA from "../../assets/estrellas/1estrellas.png"
import DOS from "../../assets/estrellas/2estrellas.png"
import TRES from "../../assets/estrellas/3estrellas.png"
import CUATRO from "../../assets/estrellas/4estrellas.png"
import CINCO from "../../assets/estrellas/5estrellas.png"
import MENOS from "../../assets/estrellas/menos.png"
import MAS from "../../assets/estrellas/mas.png"
import "./TaskForm.css"

const TaskForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(1);
    const [reviewText, setReviewText] = useState("");
    const [author, setAuthor] = useState("");

    const handleRatingChange = (value) => {
        // Asegúrate de que el rating esté entre 1 y 5
        const newRating = Math.max(1, Math.min(5, value));
        setRating(newRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que se haya ingresado texto antes de enviar
        if (!reviewText.trim() || !author.trim()) {
            alert("Please enter both review and author.");
            return;
        }

        const newReview = {
            id: Date.now(),
            rating,
            review: reviewText,
            author,
        };

        onSubmit(newReview);

        // Limpiar el formulario después de enviar la reseña
        setRating(1);
        setReviewText("");
        setAuthor("");
    };


    // limites de palabras 
    const wordLimit = 20; // Establece el límite de palabras deseado

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const words = inputValue.split(' ').filter(word => word !== ''); // Elimina espacios en blanco adicionales
        const truncatedText = words.slice(0, wordLimit).join(' ');

        if (words.length <= wordLimit) {
            setReviewText(inputValue);
        } else {
            setReviewText(truncatedText);
        }
    };



    return (
        <div className="formularioReseña">
            <form onSubmit={handleSubmit}>

                <div className="rating-buttons">
                    <button className="menos" type="button" onClick={() => handleRatingChange(rating - 1)}>
                        {/* Aquí puedes colocar tu imagen para disminuir el rating */}
                        <img src={MENOS} alt="-" />
                    </button>
                    <div className="rating-image">
                        {/* Lógica para mostrar la imagen del rating */}
                        {rating === 1 && <img src={UNA} alt="1 estrella" />}
                        {rating === 2 && <img src={DOS} alt="2 estrellas" />}
                        {rating === 3 && <img src={TRES} alt="3 estrellas" />}
                        {rating === 4 && <img src={CUATRO} alt="4 estrellas" />}
                        {rating === 5 && <img src={CINCO} alt="5 estrellas" />}
                    </div>
                    <button className="mas" type="button" onClick={() => handleRatingChange(rating + 1)}>
                        {/* Aquí puedes colocar tu imagen para aumentar el rating */}
                        <img src={MAS} alt="+" />
                    </button>
                </div>

                <label className="nombreInput">
                    Nombre: <br />
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => {
                            if (e.target.value.length <= 20) { // Cambia 50 al límite deseado
                                setAuthor(e.target.value);
                            }
                        }}
                    />
                </label>

                <br />

                <label className="reseñaInput">
                    Reseña:
                    <textarea
                        value={reviewText}
                        onChange={handleInputChange}
                    />
                    <p>Palabras restantes: {wordLimit - reviewText.split(' ').filter(word => word !== '').length}</p>
                </label>


                <br />

                <button className="subirReseña" type="submit"><strong>Subir Reseña</strong></button>
            </form>
        </div>
    );
};

export default TaskForm;
