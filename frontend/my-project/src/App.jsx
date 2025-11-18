import React from "react";
import Navbar from "./components/components_lite/Navbar";
import Login from "./components/authentication/login";
import Register from "./components/authentication/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/components_lite/Home";
import Terms from "./components/components_lite/Terms";
import Rights from "./components/components_lite/Rights";
import Jobs from"./components/components_lite/Jobs";
import Browse from "./components/components_lite/Browse";
import Profile from "./components/components_lite/Profile";
import Description from "./components/components_lite/Description";
import Companies from "./components/admin.component/Companies";
import Companycreate from "./components/admin.component/Companycreate";
import Companyset from "./components/admin.component/Companyset";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Terms",
    element: <Terms />,
  },
  {
    path: "/Rights",
    element: <Rights />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/description/:id",
    element: <Description />,
  },
  {
    path: "/admin/companies",
    element: <Companies />,
  },
  {
    path: "/admin/companies/create",
    element:<Companycreate/>
  },
  {
    path:"/admin/companies/:id",
    element:<Companyset/>
  } 
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
