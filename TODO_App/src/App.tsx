import type { Todo } from "./types.tsx";
import ToDoForm from "./components/ToDoForm";
import { useState } from "react";

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

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App </h1>
      <ToDoForm addToDo={addTodo} />

      {/* Show todo list */}
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            cursor: "pointer",
            // textDecoration: todo.completed ? "line-through" : "none",
            marginBottom: 10,
            padding: 10,
            borderRadius: 4,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default App;
