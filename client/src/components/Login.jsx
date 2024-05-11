import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         const response = await fetch("http://localhost:4000/api/login", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         });
         if (response.ok) {
             const data = await response.json();
             localStorage.setItem("token", data.token);
             navigate("/tasks");
         } else {
           throw new Error("Failed to Login!");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };
  return (
     <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
          <span className='text-md font-normal'>Not registered? Please
        <Link to='/signup' className='hover:underline'> Signup</Link></span>
      </form>
    </div>
  )
};

export default Login;
