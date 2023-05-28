import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  removeTodo: (target: string) => void;
}> = ({ items, removeTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} todo={item} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
