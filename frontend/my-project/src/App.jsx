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
import Jobs from "./components/components_lite/Jobs";
import Browse from "./components/components_lite/Browse";
import ProtectedRoute from "./components/admin.component/ProtectedRoutes";

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
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <Companycreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <Companyset />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <Jobscompany />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <PostnewJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
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
