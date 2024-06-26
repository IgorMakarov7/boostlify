import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

try {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} catch (e) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <div>только в telegram</div>
    </React.StrictMode>
  );
}
