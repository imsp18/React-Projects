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

  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`(${r}, ${g}, ${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => setValue("hex")}>Generate Hex Color</button>
      <button onClick={() => setValue("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          value === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          marginTop: "50px",
        }}
      >
        <h3>{value}</h3>
        <h4>{color}</h4>
      </div>
    </div>
  );
}
