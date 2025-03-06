import React from "react";
import Color from "./Color"; // Импортируем компонент Color

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color} // Передаем все свойства каждого цвета
          onRemove={onRemoveColor} // Обработчик для удаления
          onRate={onRateColor} // Обработчик для изменения рейтинга
        />
      ))}
    </div>
  );
}
