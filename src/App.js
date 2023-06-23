import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Student from "./routes/Student";
import StudentDetail from "./routes/StudentDetail";
import Signup from "./routes/Signup";
import Login from "./routes/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentDatas" element={<Student />} />
        <Route path="/studentDatas/:id" element={<StudentDetail />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
