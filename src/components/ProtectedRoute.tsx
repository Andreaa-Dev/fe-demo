import { Navigate } from "react-router-dom";
import { User } from "../types";

const ProtectedRoute = ({
  user,
  children,
}: {
  user: null | User;
  children: React.JSX.Element;
}): React.JSX.Element => {
  if (!user) {
    return <Navigate to="/landing" replace />;
  }
  if (user.role === "ADMIN") {
    return children;
  }

  return children;
};

export default ProtectedRoute;
