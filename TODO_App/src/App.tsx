import type { Todo } from "./types.tsx";
import ToDoForm from "./components/ToDoForm";
import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [todos, setToDos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setToDos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // const deleteTodo = (id: number) => {
  //   setToDos(todos.filter((todo) => todo.id !== id));
  // };
  const deleteTodo = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="app-container">
      <h1 className="title">todos</h1>
      <ToDoForm addToDo={addTodo} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            {/* <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
