import { useState } from "react";
import "./AddTasks.css";

export default function AddTasks(props) {
  const [task, setTask] = useState("");

  return (
    <div className="add-task-container">
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Digite sua tarefa..."
        type="text"
      />

      <button
        className="add-btn"
        onClick={() => {
          if (!task.trim()) return;
          props.addTask(task);
          setTask("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
