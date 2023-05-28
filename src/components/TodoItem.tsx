import React from "react";
import classes from "./TodoItem.module.css";
import Todo from "../models/todo";

const TodoItem: React.FC<{
  todo: Todo;
  removeTodo: (target: string) => void;
}> = ({ removeTodo, todo }) => {
  const handleClick = () => {
    removeTodo(todo.id);
  };

  return (
    <li className={classes.item} onClick={handleClick} id={todo.id}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
