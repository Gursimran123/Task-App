import {useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

const TaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);

    const fetchTaskDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:4000/task/${id}`, {
          method: "GET",
          headers: {
            token: `${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTask(data);
        } else {
          throw new Error("Failed to fetch task details!");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    useEffect(()=>{
        fetchTaskDetails();
    },[id]);

    if (!task) {
      return <div className='mt-20 text-lg text-center font-semibold'>Loading...</div>;
    }

  return (
    <div className="container mx-auto mt-6 p-4 flex flex-col gap-6">
      <h2 className="text-2xl">{task.title}</h2>
      <p className="text-gray-700">{task.description}</p>
      <Link
        to="/tasks"
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[70px] rounded focus:outline-none focus:shadow-outline mt-3'
      >
        Back
      </Link>
    </div>
  );
}

export default TaskDetails
