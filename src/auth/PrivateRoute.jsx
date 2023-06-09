import { Navigate } from "react-router-dom";
function ProtectedRoute({ auth, redirectPath = "/", children }) {
  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
export default ProtectedRoute;
