import React from "react";
import { createBrowserRouter } from "react-router-dom";

const RouterGaurd = React.lazy(() =>
  import("@/components/layouts/RouterGaurd"),
);
const Layout = React.lazy(() => import("@/components/layouts/Layout"));
const Home = React.lazy(() => import("@/pages/Home"));
const Login = React.lazy(() => import("@/pages/Login"));
const Logout = React.lazy(() => import("@/pages/Logout"));
const About = React.lazy(() => import("@/pages/About"));
const Contact = React.lazy(() => import("@/pages/Contact"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard"));
const Error404 = React.lazy(() => import("@/pages/Error404"));

const protectedRoutes = {
  element: <RouterGaurd />,
  children: [
    {
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
};

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  { ...protectedRoutes },
];

const router = createBrowserRouter(routes);

export default router;
