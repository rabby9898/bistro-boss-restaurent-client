import { useContext } from "react";
import useIsAdmin from "../../Hooks/useIsAdmin/useIsAdmin";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useIsAdmin();
  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center my-20 mx-auto">
        <span className="loading loading-spinner text-primary "></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default AdminRoute;
