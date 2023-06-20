import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ isAuth }) => {
  const { pathname } = useLocation();
  if (isAuth) return <Outlet />;
  return <Navigate to="/" state={{ from: pathname }} replace />;
};
