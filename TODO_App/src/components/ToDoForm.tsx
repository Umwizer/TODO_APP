import React, { useState } from "react";

type ToDoFormProps = {
  addToDo: (text: string) => void;
};

const ToDoForm: React.FC<ToDoFormProps> = ({ addToDo }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addToDo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        +
      </button>
    </form>
  );
};

export default ToDoForm;
