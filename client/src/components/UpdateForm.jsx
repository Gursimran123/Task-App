import  { useState } from "react";

const UpdateForm = ({ isOpen, onClose, task }) => {
   const [formData, setFormData] = useState({
     title: task.title,
     description: task.description,
   });
  
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`https://task-app-api-two.vercel.app/api/task/${task._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onClose();
        setFormData({
          title: "",
          description: "",
        });
      } else {
        throw new Error("Failed to update task!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="bg-white rounded-lg p-8 w-[400px] z-20">
          <h2 className="text-2xl mb-4">Update Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.description}
                name="description"
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
