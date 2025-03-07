import React, { useState } from "react";
import colorData from "./color-data.json"; // Импортируем данные
import ColorList from "./component/ColorList"; // Импортируем компонент ColorList
import AddColorForm from "./component/AddColorForm";
import { v4 } from "uuid";

export default function App() {
  const [colors, setColors] = useState(colorData); // Делаем состояние для цветов

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [...colors, { id: v4(), rating: 0, title, color }];
          setColors(newColors);
        }}
      />
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
    </>
  );
}
