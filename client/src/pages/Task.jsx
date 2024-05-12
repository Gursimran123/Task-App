import  { useState, useEffect } from "react";
import AddForm from "../components/AddForm";
import UpdateForm from "../components/UpdateForm";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedTask, setSelectedTask] = useState(null);
   const navigate = useNavigate();

  //Fetching all the tasks
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/api", {
        method: "GET",
        headers: {
          token: `${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        throw new Error("Failed to fetch tasks!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  //deleting a task
  const handleDelete = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:4000/api/task/${taskId}`, {
        method: "DELETE",
        headers: {
          token: `${token}`,
        },
      });
      if (response.ok) {
        // Remove the deleted task from the state
        setTasks(tasks.filter((task) => task._id !== taskId));
      } else {
        throw new Error("Failed to delete task!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUpdateForm = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

   const closeUpdateForm = () => {
     setSelectedTask(null);
     setIsModalOpen(false);
   };

    const handleTaskDetailsClick = (taskId) => {
      navigate(`/task/${taskId}`);
    };

  return (
    <div className="container mx-auto mt-6 p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl mb-4">Tasks</h2>
        <button
          onClick={() => {
            setSelectedTask(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <h1 className="text-center text-lg font-semibold">No tasks to show...Please add the task</h1>
      ) : (
        <ul className="flex flex-col gap-2 mb-1">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between border-b border-gray-200 py-4 list-none hover:bg-gray-200 cursor-pointer p-2"
            >
              <h3 className="text-xl font-bold mb-2">{task.title}</h3>
              <p className="text-gray-700">
                {task.description.substring(0, 30)}...
              </p>
              <div className="mt-2 flex gap-1">
                <button
                  onClick={() => handleTaskDetailsClick(task._id)}
                  className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Details
                </button>
                <button
                  onClick={() => openUpdateForm(task)}
                  className="mr-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <AddForm isOpen={isModalOpen} onClose={closeModal} />
      {selectedTask && (
        <UpdateForm
          isOpen={isModalOpen}
          onClose={closeUpdateForm}
          task={selectedTask}
        />
      )}
    </div>
  );
};

export default Task;
