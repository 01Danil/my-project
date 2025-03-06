import React from "react"; // Исправлено: убран лишний пробел и запятая
// import { FaStar } from "react-icons/fa"; // Удаляем, если не используем

const Star = (props) => {
  const { selected = false, onSelect = (f) => f } = props;
  return (
    <span
      onClick={onSelect}
      style={{ color: selected ? "red" : "gray", cursor: "pointer" }}
    >
      ★
    </span>
  );
};

const createArray = (length) => [...Array(length)]; // Функция для создания массива звезд

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  return (
    <>
      {/* Маппим массив звезд и отображаем их с нужными параметрами */}
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)} // Передаем новую оценку при клике на звезду
        />
      ))}
    </>
  );
}