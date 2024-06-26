import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Taskit, { action as tasksAction, loader as taksLoader } from "./routes/Tasksit";
import Error from "./components/ErrorElement";
import Login, { action as loginAction } from "./routes/Login"

const router = createBrowserRouter([
  {
    errorElement:<Error />,
    children:[{
      path: "/login",
      element: <Login />,
      action: loginAction,
    },
    {
      path: "/tasks",
      element: <Taskit />,
      loader: taksLoader,
      action: tasksAction
  
    },]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);