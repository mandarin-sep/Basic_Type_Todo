import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
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
