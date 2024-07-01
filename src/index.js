import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{validateInitDataUnsafe()}</React.StrictMode>
);

function validateInitDataUnsafe() {
  if (window.Telegram.WebApp.initDataUnsafe.hasOwnProperty("user")) {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
    ]);
    return <RouterProvider router={router} />;
  } else {
    return <div>только в telegram</div>;
  }
}
