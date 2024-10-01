import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Tasks({ tasks, onTaskClick, onTrashClick }) {
  const navigate = useNavigate();

  const onSeeTaskClick = useCallback(
    (taskId) => {
      navigate(`/task/details/${taskId}`, { state: { tasks } });
    },
    [navigate, tasks]
  );

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            className="bg-slate-400 text-white p-2 rounded-md"
            onClick={() => onSeeTaskClick(task.id)}
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTrashClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
