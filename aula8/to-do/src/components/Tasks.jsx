import "./Tasks.css";

export default function Tasks(props) {
  return (
    <ul className="task-list">
      {props.tasks.map((task) => (
        <li className="task-item" key={task.id}>
          {task.text}

          <button
            className="remove-btn"
            onClick={() => props.removeTask(task.id)}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
