import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{validateInitDataUnsafe()}</React.StrictMode>
);

function validateInitDataUnsafe() {
  if (!window.Telegram.WebApp.initDataUnsafe.hasOwnProperty("user")) {
    return <div>только в telegram</div>;
  }

  // if (initData validate)
  // ) {
    // return <div>данные telegram не прошли проверку</div>;
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
}
