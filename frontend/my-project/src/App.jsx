import React from "react";
import Navbar from "./components/components_lite/Navbar";
import Login from "./components/authentication/login";
import Register from "./components/authentication/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/components_lite/Home";
import Terms from "./components/components_lite/Terms";
import Rights from "./components/components_lite/Rights";
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
    element: <Terms />
  },
  {
    path:"/Rights",
    element:<Rights/>
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
