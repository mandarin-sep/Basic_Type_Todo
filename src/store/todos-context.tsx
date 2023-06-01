import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  onAddTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  fixTodo: (id: string, fixedTodo: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  onAddTodo: () => {},
  removeTodo: (id: string) => {},
  fixTodo: (id: string, fixedTodo: string) => {},
});

const TodosContextProvider = (props: {
  children: React.ReactNode;
}): JSX.Element => {
  const initData = localStorage.getItem("todoList");

  const [todolist, setTodolist] = useState<Todo[]>(
    JSON.parse(initData ? initData : "[]")
  );

  const addTodoHandler = (todoText: string) => {
    setTodolist(todolist.concat(new Todo(todoText)));
  };

  const removeTodoHandler = (target: string) => {
    setTodolist(todolist.filter((todo) => todo.id !== target));
  };

  const fixTodoHandler = (target: string, fixedTodo: string) => {
    const fixedTodoList = todolist.map((todo) => {
      if (todo.id === target) return new Todo(fixedTodo);

      return todo;
    });
    setTodolist(fixedTodoList);
  };

  const contextValue: TodosContextObj = {
    items: todolist,
    onAddTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    fixTodo: fixTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
