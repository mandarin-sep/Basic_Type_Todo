import React, { useContext, useState } from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "../models/todo";
import classes from "./TodoFix.module.css";

const TodoFix: React.FC<{ todo: Todo; handleFixTodoState: () => void }> = ({
  todo,
  handleFixTodoState,
}) => {
  const { fixTodo } = useContext(TodosContext);

  const [text, setText] = useState(todo.text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fixTodo(todo.id, text);
    handleFixTodoState();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>수정완료</button>
    </form>
  );
};

export default TodoFix;
