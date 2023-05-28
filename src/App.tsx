import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodolist(todolist.concat(newTodo));
  };

  const removeTodoHandler = (target: string) => {
    const newTodo = todolist.filter((todo) => todo.id !== target);
    setTodolist(newTodo);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todolist} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
