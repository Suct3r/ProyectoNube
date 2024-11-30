import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      await loadTasks();
      setLoading(false); // Finaliza la carga
    };
    fetchData();
  }, [loadTasks]);

  // Renderiza las tareas o el mensaje de "No tasks yet"
  function renderMain() {
    if (loading) return <h1 className="text-white text-center">Cargando...</h1>; // Mensaje de carga
    if (tasks.length === 0) return <h1 className="text-5xl text-white font-bold text-center mb-6">No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center mb-6">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
