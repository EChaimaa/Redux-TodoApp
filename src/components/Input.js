import React, { useState } from "react";
import "./Input.css";

function Input() {
  //declarations
  const [input, setInput] = useState("");
  //methods
  const addTodo = () => {};

  return (
    <div className="input">
      <input type="text"></input>
      <button onClick={addTodo}>Add 📅</button>
    </div>
  );
}

export default Input;
