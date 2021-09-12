import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <h1>My Todo App 📌📅</h1>
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo}></TodoItem>
          ))}
        </div>
        <Input></Input>
      </div>
    </div>
  );
}

export default App;
