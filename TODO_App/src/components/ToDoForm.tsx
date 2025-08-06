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
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new task..."
        style={{ padding: 8, width: "70%" }}
      />
      <button type="submit" style={{ padding: 8, marginLeft: 10 }}>
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
