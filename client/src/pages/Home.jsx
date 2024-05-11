// import Login from "../components/Login"
// import Signup from "../components/Signup"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center  m-10 h-screen">
      <div className="w-full flex flex-col gap-4">
       <h2 className="text-2xl md:text-4xl font-bold">Welcome to the Task Management App</h2>
       <div className="flex gap-2 items-center justify-start  mt-4">
         <Link to='/signup' className="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Signup</Link>
        <Link to='/login' className="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</Link>
       </div>
      </div>
    </div>
  );
}

export default Home