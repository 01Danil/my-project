import React from "react";
import { FaTrash } from "react-icons/fa"; // Иконка для удаления
import StarRating from "./StarRating"; // Импортируем компонент для рейтинга

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
}
