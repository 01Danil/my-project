import React, { createContext } from "react";
import colors from "./color-data.json"; // Убедись, что этот файл существует и правильно импортируется
import ReactDOM from "react-dom/client"; // Импортируем createRoot
import App from "./App";

export const ColorContext = createContext(); // создаем контекст

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorContext.Provider value={{ colors }}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>
);
