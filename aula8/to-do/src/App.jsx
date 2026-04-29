import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender Hooks" },
    { id: 2, text: "Terminar a To-Do List" },
  ]);

  function addTask(text) {
    const task = {
      id: Date.now(),
      text,
    };

    setTasks([...tasks, task]);
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <AddTasks addTask={addTask} />
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  );
}
