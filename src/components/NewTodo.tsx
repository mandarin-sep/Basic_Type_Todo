import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { onAddTodo } = useContext(TodosContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">할 일</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>추가</button>
    </form>
  );
};

export default NewTodo;
