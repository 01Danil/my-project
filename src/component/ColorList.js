import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [], onRemoveColor = (f) => f }) {
  if (!colors.length) return <div>No Colors listed. (Add a color)</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemoveColor} />
      ))}
    </div>
  );
}
