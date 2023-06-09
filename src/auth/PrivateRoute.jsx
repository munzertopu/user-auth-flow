import { Navigate } from "react-router-dom";

const useAuth = () => {
  let auth = null;
  const token = JSON.parse(localStorage.getItem("fake_access_token"));
  if (token) auth = token;
  return auth;
};
function ProtectedRoute({ redirectPath = "/", children }) {
  const authenticated = useAuth();
  if (!authenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
export default ProtectedRoute;
