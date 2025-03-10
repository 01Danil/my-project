import React, { createContext, useState, useContext } from "react";
import colorData from "./color-data.json";
import { v4 } from "uuid";

// Создаём контекст
const ColorContext = createContext();

// Кастомный хук для удобного доступа к контексту
export const useColors = () => useContext(ColorContext);

// ✅ Добавляем ColorProvider
export function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) =>
    setColors([
      ...colors,
      { id: v4(), title, color, rating: 0 },
    ]);

  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
}