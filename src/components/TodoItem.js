import { Checkbox } from "@material-ui/core";
import React from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

export const TodoItem = ({ todo }) => {
  //declarations
  const dispatch = useDispatch();

  //methods
  const handleCheck = () => {
    dispatch(setCheck(todo.id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={todo.done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={todo.done ? "todoItem__done" : ""}>{todo.item}</p>
    </div>
  );
};

export default TodoItem;
