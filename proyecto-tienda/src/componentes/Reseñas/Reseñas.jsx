import React, { useState, useEffect } from "react";
// import Navegador from "../Navegador";
import NavBar from "../menu/NavBar";
import Piedepagina from "../Piedepagina";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./Reseñas.css";

function Reseñas() {
  const [reviews, setReviews] = useState([]);

  // Cargar desde el localStorage al montar el componente
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    if (storedReviews.length === 0) {
      const defaultReviews = [
        { id: 1, rating: 5, review: "Muy buena disposicion y gran servicio. ", author: "Pablo Basile", util: true },
        { id: 2, rating: 4, review: "Entrega rapida y productos de calidad.", author: "David", util: true },
        { id: 3, rating: 2, review: "El producto llego en pesimas condiciones, no recomiendo para nada.", author: "Valentin Romero", util: false },
      ];

      localStorage.setItem("reviews", JSON.stringify(defaultReviews));
      setReviews(defaultReviews);
    } else {
      setReviews(storedReviews);
    }
  }, []);

  // Guardar reseñas en el localStorage cada vez que el estado de las reseñas cambia
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleMarkAsUtil = (id, isUtil) => {
    const updatedReviews = reviews.map((review) =>
      review.id === id ? { ...review, util: isUtil } : review
    );
    setReviews(updatedReviews);
  };

  const handleDeleteReview = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  const handleAddReview = (newReview) => {
    const reviewWithUtil = { ...newReview, util: false };
    setReviews([...reviews, reviewWithUtil]);
  };

  return (
    <>
      <header>
        <NavBar />
        {/* <Navegador /> */}
      </header>
      <main className="reseñas">
        <TaskList
          tasks={reviews}
          onMarkAsUtil={(id, isUtil) => handleMarkAsUtil(id, isUtil)}
          onDelete={(id) => handleDeleteReview(id)}
        />
        <TaskForm onSubmit={(newReview) => handleAddReview(newReview)} />
      </main>
      <footer>
        <Piedepagina />
      </footer>
    </>
  );
}

export default Reseñas;