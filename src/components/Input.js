import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

function Input() {
  //declarations
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  //methods
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );

    setInput("");
  };

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
