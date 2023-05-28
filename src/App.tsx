import { Todos } from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("유데미 강의 듣기"), new Todo("프로그래머스")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
