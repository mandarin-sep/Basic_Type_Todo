import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import Todo from "../models/todo";
import TodoFix from "./TodoFix";

const TodoItem: React.FC<{
  todo: Todo;
  removeTodo: (target: string) => void;
}> = ({ removeTodo, todo }) => {
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
          {todo.text}
          <button onClick={handleFixTodoState}>수정</button>
          <button onClick={handleClick}>삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
