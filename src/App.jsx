import { useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTasks/AddTask";
import Tasks from "./components/ListTasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", isCompleted: false },
    { id: 2, title: "Estudar Tailwind", isCompleted: true },
    { id: 3, title: "Estudar Axios", isCompleted: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTaskClick={toggleTaskCompletion}
          onTrashClick={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
