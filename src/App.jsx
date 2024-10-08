import { useState, useCallback, useEffect } from "react";
import "./App.css";
import AddTasks from "./components/AddTasks/AddTask";
import Tasks from "./components/ListTasks/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }, []);

  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const addTask = useCallback((title, description) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
        title,
        description,
        isCompleted: false,
      },
    ]);
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-7">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks addTask={addTask} />
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
