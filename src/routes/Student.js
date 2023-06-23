import React from "react";
import Navbar from "../components/Navbar";
import StudentTable from "../components/StudentTable";
import { ProtectedRoute } from "../ProtectedRoute";

const Student = () => {
  return (
    <div>
      <Navbar />
      <ProtectedRoute>
        <StudentTable />
      </ProtectedRoute>
    </div>
  );
};

export default Student;
