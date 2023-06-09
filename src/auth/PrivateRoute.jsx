import { Navigate } from "react-router-dom";

const useAuth = () => {
  let auth = null;
};
function ProtectedRoute({ auth, redirectPath = "/", children }) {
  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
export default ProtectedRoute;
