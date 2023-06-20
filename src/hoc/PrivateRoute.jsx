import { NotFound } from "../pages";
import { Preloader } from "../ui-kit";
export const PrivateRoute = ({ permission, type, Component }) => {
  if (type && permission.indexOf(type) === -1) return <NotFound />;
  if (!type && permission.indexOf(type) === -1) return <Preloader />;
  return <Component />;
};
