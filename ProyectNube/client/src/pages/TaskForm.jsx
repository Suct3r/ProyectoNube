import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      try {
        if (params.id) {
          const fetchedTask = await getTask(params.id);
          setTask({
            title: fetchedTask.title || "",
            description: fetchedTask.description || "",
          });
        }
      } catch (error) {
        console.error("Error loading task:", error);
      }
    };
    loadTask();
  }, [params.id]);


  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
            try {
              if (params.id) {
                await updateTask(params.id, values);
              } else {
                await createTask(values);
              }
              navigate("/");
              setTask({
                title: "",
                description: "",
              });
              actions.resetForm();
            } catch (error) {
              console.error("Error submitting form:", error);
            } finally {
              actions.setSubmitting(false);
            }
          }}          
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : "New Task"}
            </h1>
            <label className="block">title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block">description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.description}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;