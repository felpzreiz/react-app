import React, { useState } from "react";
import "./style/style.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Bloco() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color)
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    
      <br></br>

    </div>
  );
}

export default Bloco;
