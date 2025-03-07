import React, { useRef } from "react";
import { useInput } from "./UseInput";

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event) => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}

<form onSubmit={submit}>
  <input
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    type="text"
    placeholder="color title..."
    required
  />
  <input
    value={color}
    onChange={(event) => setColor(event.target.value)}
    type="color"
    required
  />
  <button>ADD</button>
</form>;

const submit = (e) => {
  e.preventDefault();
  onNewColor(title, color);
  setTitle("");
  setColor("");
};
