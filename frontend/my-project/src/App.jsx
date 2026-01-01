import React from "react";
import Navbar from "./components/components_lite/Navbar";
import Login from "./components/authentication/login";
import Register from "./components/authentication/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/components_lite/Home";
import Terms from "./components/components_lite/Terms";
import Rights from "./components/components_lite/Rights";
import Profile from "./components/components_lite/Profile";
import Description from "./components/components_lite/Description";
import Companies from "./components/admin.component/Companies";
import Companycreate from "./components/admin.component/Companycreate";
import Companyset from "./components/admin.component/Companyset";
import Jobscompany from "./components/admin.component/Jobscompany";
import PostnewJobs from "./components/admin.component/PostnewJobs";
import Applicants from "./components/admin.component/Applicants";

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
    element: <Companycreate />,
  },
  {
    path: "/admin/companies/:id",
    element: <Companyset />,
  },
  {
    path: "/admin/jobs",
    element: <Jobscompany />,
  },
  {
    path: "/admin/jobs/create",
    element: <PostnewJobs />,
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Applicants />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
