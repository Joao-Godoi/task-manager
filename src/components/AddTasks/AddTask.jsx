import { useState, useCallback } from "react";

function AddTasks({ addTask }) {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTask = useCallback(() => {
    const { title, description } = formData;
    if (!title.trim() || !description.trim()) {
      alert("Preencha o título e a descrição!");
      setFormData({ title: "", description: "" });
      return;
    }
    addTask(title.trim(), description.trim());
    setFormData({ title: "", description: "" });
  }, [formData, addTask]);

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        name="title"
        placeholder="Digite o título da sua tarefa..."
        className="border border-slate-300 px-4 py-2 rounded-md"
        value={formData.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Digite a descrição da sua tarefa..."
        className="border border-slate-300 px-4 py-2 rounded-md"
        value={formData.description}
        onChange={handleInputChange}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={handleAddTask}
      >
        Criar tarefa
      </button>
    </div>
  );
}

export default AddTasks;
