import React, { useState } from "react";
import "./Input.css";

function Input() {
  //declarations
  const [input, setInput] = useState("");
  //methods
  const addTodo = () => {};

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addTodo}>ADD ✅</button>
    </div>
  );
}

export default Input;
