import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RouterGarud = () => {
  const user = useSelector(({ user }) => user.data);

  if (!user?.loggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default RouterGarud;
