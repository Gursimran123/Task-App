import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem('token');

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        window.location.href='/login';
    }

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white container max-w-screen-2xl">
      <div>
        <Link to="/" className="text-lg font-bold">
          Task App
        </Link>
      </div>
      {isLoggedIn ? (
        <button onClick={handleLogout} 
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
      ) : (
        location.pathname !== "/login" && <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
