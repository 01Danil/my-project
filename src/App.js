import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./component/ColorList.js";

export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}
