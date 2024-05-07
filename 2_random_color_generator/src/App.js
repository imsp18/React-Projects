import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={handleCreateRandomHexColor}>
        Generate Random Color
      </button>
    </div>
  );
}
