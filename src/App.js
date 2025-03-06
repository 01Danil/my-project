import React, { useState } from "react";
import colorData from "./color-data.json"; // Импортируем данные
import ColorList from "./component/ColorList"; // Импортируем компонент ColorList

export default function App() {
  const [colors, setColors] = useState(colorData); // Делаем состояние для цветов

  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        // Обновляем рейтинг для выбранного цвета
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors); // Обновляем состояние с новыми данными
      }}
      onRemoveColor={(id) => {
        // Удаляем цвет по id
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors); // Обновляем состояние с новым списком цветов
      }}
    />
  );
}
