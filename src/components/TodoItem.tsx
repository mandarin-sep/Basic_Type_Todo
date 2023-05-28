import React, { useRef } from "react";
import classes from "./TodoItem.module.css";
import Todo from "../models/todo";

const TodoItem: React.FC<{
  todo: Todo;
  removeTodo: (target: string) => void;
}> = (props) => {
  const todoRef = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    props.removeTodo(todoRef.current!.id);
  };

  return (
    <li
      className={classes.item}
      onClick={handleClick}
      id={props.todo.id}
      ref={todoRef}
    >
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
