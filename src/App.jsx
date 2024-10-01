import "./App.css";
import AddTasks from "./components/AddTasks/AddTask";
import Tasks from "./components/ListTasks/Tasks";

function App() {
  return (
    <div>
      <h1>Gerenciador de tarefas</h1>
      <AddTasks />
      <Tasks />
    </div>
  );
}

export default App;
