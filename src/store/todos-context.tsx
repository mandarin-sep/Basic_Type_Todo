import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  onAddTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  onAddTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todolist, setTodolist] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodolist(todolist.concat(new Todo(todoText)));
  };

  const removeTodoHandler = (target: string) => {
    setTodolist(todolist.filter((todo) => todo.id !== target));
  };

  const contextValue: TodosContextObj = {
    items: todolist,
    onAddTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
