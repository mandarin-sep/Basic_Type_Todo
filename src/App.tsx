import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodolist(todolist.concat(new Todo(todoText)));
  };

  const removeTodoHandler = (target: string) => {
    setTodolist(todolist.filter((todo) => todo.id !== target));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todolist} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
