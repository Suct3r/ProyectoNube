import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://3.14.145.236:4000/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("http://3.14.145.236:4000/tasks", task);

export const deleteTaskRequest = async (id) => {
    try {
      return await axios.delete(`http://3.14.145.236:4000/tasks/${id}`);
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error; // Lanza el error para que pueda ser manejado en otro lugar
    }
  };
  

export const getTaskRequest = async (id) =>
  await axios.get(`http://3.14.145.236:4000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://3.14.145.236:4000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://3.14.145.236:4000/tasks/${id}`, {
    done,
  });
