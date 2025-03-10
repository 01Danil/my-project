import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorProvider } from "./color-hooks.js"; // ✅ Импортируем ColorProvider из color-hooks.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
);
