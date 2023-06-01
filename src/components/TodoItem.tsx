import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import Todo from "../models/todo";
import TodoFix from "./TodoFix";

interface ItemProps {
  todo: Todo;
  removeTodo: (target: string) => void;
}

const TodoItem = ({ removeTodo, todo }: ItemProps) => {
  const handleClick = () => {
    removeTodo(todo.id);
  };

  const [fix, setFix] = useState(false);

  const handleFixTodoState = () => {
    setFix(!fix);
  };

  return (
    <li className={classes.item} id={todo.id}>
      {fix ? (
        <TodoFix todo={todo} handleFixTodoState={handleFixTodoState} />
      ) : (
        <>
          <span>{todo.text}</span>
          <button className={classes.fixBtn} onClick={handleFixTodoState}>
            수정
          </button>
          <button className={classes.deleteBtn} onClick={handleClick}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
