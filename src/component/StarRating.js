import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // ✅ Импортируем иконки звезд

const Star = ({ selected = false, onSelect = () => {} }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)]; // Функция для создания массива звезд

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0); // Используем состояние

  return (
    <div style={{ padding: "5px" }}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
