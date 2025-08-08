import type { Todo } from "./types.tsx";
import ToDoForm from "./components/ToDoForm";
import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [todos, setToDos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

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

  const deleteTodo = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, newText: string) => {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  // <-- Add this function
  const handleUpdate = () => {
    if (editingText.trim() && editingId !== null) {
      updateTodo(editingId, editingText);
      setEditingId(null);
      setEditingText("");
    }
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

            {/* Show input field if editing this todo */}
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUpdate();
                    }
                    if (e.key === "Escape") {
                      setEditingId(null);
                      setEditingText("");
                    }
                  }}
                  autoFocus
                />
                <button onClick={handleUpdate}>Save</button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setEditingText("");
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className={todo.completed ? "completed" : ""}>
                  {todo.text}
                </span>

                <button
                  className="update-button"
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditingText(todo.text);
                  }}
                >
                  Edit
                </button>
              </>
            )}

            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
