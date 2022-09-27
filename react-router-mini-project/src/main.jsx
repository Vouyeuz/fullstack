import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Dashboard from "./routes/dashboard";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);