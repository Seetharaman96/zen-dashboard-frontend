import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  return token ? <div>{children}</div> : <Navigate replace to="/users/login" />;
};
