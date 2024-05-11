import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Task from "./pages/Task";
import TaskDetails from "./pages/TaskDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
