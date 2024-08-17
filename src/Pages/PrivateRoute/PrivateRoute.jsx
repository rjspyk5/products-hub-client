import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Loading } from "../../Components/LoadingSpinner/Loading";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (!loading && user) {
    return children;
  }
  return <Navigate to="/login" />;
};
