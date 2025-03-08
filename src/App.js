import React from "react";
import ColorList from "./component/ColorList"; // Импортируем компонент ColorList
import AddColorForm from "./component/AddColorForm";

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}
