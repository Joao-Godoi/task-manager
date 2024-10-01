import { ChevronLeftIcon } from "lucide-react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

function TaskDetails() {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const location = useLocation();
  const { tasks } = location.state;

  const task = useMemo(
    () => tasks.find((task) => task.id === taskId),
    [tasks, taskId]
  );

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="text-white absolute left-0 top-0 bottom-0"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="text-white" />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-800">
            Título: {task.title}
          </h2>
          <p className="mt-4 text-slate-700">Descrição: {task.description}</p>
          <p className="mt-4 text-slate-600 text-sm">
            Status: {task.isCompleted ? "Concluída" : "Pendente"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
